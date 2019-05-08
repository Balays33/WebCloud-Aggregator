package ie.cct.aggregator.controller;

// You might need to modify this class to add the utcDate response.
public class AggregatorResponse {

    private String isoDate;

    public AggregatorResponse(String isoDate) {
        this.isoDate = isoDate;
    }
    
    public String getIsoDate() {
        return isoDate;
    }
}
