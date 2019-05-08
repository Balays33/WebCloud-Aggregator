package ie.cct.aggregator.controller;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.TimeZone;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
public class AggregatorController {

    @GetMapping("/utcDate/{timestamp}")
    public UTCResponse getUTCDate(@PathVariable("timestamp") Long timestamp){
        SimpleDateFormat sdf = new SimpleDateFormat();
        sdf.setTimeZone(TimeZone.getTimeZone("UTC"));
        return new UTCResponse (sdf.format(new Date(timestamp)));
    }

    @GetMapping("/timestamp/{timestamp}")
    public AggregatorResponse timestamp(@PathVariable Long timestamp) {
        RestTemplate restTemplate = new RestTemplate();
        // RestTemplate will contact the remote server and pull the required data.
        ResponseEntity<DateRequest> responseISO = restTemplate.getForEntity("http://isodate.kubernetes.cafe/{timestamp}/isodate", DateRequest.class, timestamp);
        ResponseEntity<DateRequest> responseUTC = restTemplate.getForEntity("http://localhost:8081/utcDate/{timestamp}", DateRequest.class, timestamp);

        // TODO: You need to modify this class to call the UTC Date Service (same as we did above with the ISO Date Service) and add it to the AggregatorResponse.

        return new AggregatorResponse(responseISO.getBody().getDate(),responseUTC.getBody().getDate());
    }
}
