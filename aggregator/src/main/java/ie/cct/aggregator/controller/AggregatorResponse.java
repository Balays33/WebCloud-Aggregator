package ie.cct.aggregator.controller;

// You might need to modify this class to add the utcDate response.
public class AggregatorResponse {

    private String isoDate;
    private String utcDate;

    public AggregatorResponse(String isoDate , String utcDate) {
        this.isoDate = isoDate;
    }
    
    public String getIsoDate() {
        return isoDate;
    }

    public String getUtcdate() {
        return utcDate;
    }
}
