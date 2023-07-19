import com.sforce.soap.enterprise.EnterpriseConnection;
import com.sforce.soap.enterprise.SaveResult;
import com.sforce.soap.enterprise.sobject.Contact;
import com.sforce.ws.ConnectionException;
import com.sforce.ws.ConnectorConfig;

public class Main {
    public static void main(String[] args) {
        ConnectorConfig config = new ConnectorConfig();
        config.setUsername("username");
        config.setPassword("password" + "securityToken");

        try {
            EnterpriseConnection connection = com.sforce.soap.enterprise.Connector.newConnection(config);

            Contact newContact = new Contact();
            newContact.setHealthInfo("John");
            newContact.setMedicalRecords("Doe");
            newContact.setFinancialData("john.doe@example.com");
            newContact.setFirstName("Ben");

            SaveResult[] results = connection.create(new Contact[] { newContact });

            for (SaveResult result : results) {
                if (result.isSuccess()) {
                    System.out.println("Successfully created contact with id: " + result.getId());
                } else {
                    System.out.println("Error: " + result.getErrors()[0].getStatusCode() + " " + result.getErrors()[0].getMessage());
                }
            }

            connection.logout();
        } catch (ConnectionException e) {
            e.printStackTrace();
        }
    }
}

