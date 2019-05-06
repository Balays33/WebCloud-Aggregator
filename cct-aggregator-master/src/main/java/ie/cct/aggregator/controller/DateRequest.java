package ie.cct.aggregator.controller;

// This class is used to send a request to the UTCDate server.
// It can be reused to send a request to the ISODate server.
public class DateRequest {
    
    private String date;
    
    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }
}
