package ie.cct.aggregator.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
public class AggregatorController {

    @GetMapping("/timestamp/{timestamp}")
    public AggregatorResponse timestamp(@PathVariable Long timestamp) {
        RestTemplate restTemplate = new RestTemplate();
        // RestTemplate will contact the remote server and pull the required data.
        ResponseEntity<DateRequest> response = restTemplate.getForEntity("http://isodate.kubernetes.cafe/{timestamp}/isodate", DateRequest.class, timestamp);

        // TODO: You need to modify this class to call the UTC Date Service (same as we did above with the ISO Date Service) and add it to the AggregatorResponse.

        return new AggregatorResponse(response.getBody().getDate());
    }
}
