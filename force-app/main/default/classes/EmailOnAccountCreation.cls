public with sharing class EmailOnAccountCreation {
    
 

  
    public static NewGeneratedAccounts  sendMail()
    {
		
       Http httpProtocol = new Http();
        // Create HTTP request to send.
        HttpRequest request = new HttpRequest();
        // Set the endpoint URL.
        String endpoint = 'https://echo-webhook.herokuapp.com/kp';
        request.setEndPoint(endpoint);
        // Set the HTTP verb to GET.
        request.setMethod('GET');
        // Send the HTTP request and get the response.
        // The response is in JSON format.
        HttpResponse response = httpProtocol.send(request);
		string s=response.getBody();
        System.debug(response.getBody());
        System.debug(s);
		String str=s.replace('new','new_T');




/*string str='{"new_T":[{"attributes":{"type":"Account"},"IsDeleted":false,"CleanStatus":"Pending","OwnerId":"0055i000001tHeIAAU","Name":"TechnoPark ITC","AccountNumber":"6545646541"}],"old":[],"userId":"0055i000001tHeIAAU"}';*/
system.debug(str);

NewGeneratedAccounts n=(NewGeneratedAccounts) JSON.deserialize(str,NewGeneratedAccounts.class);
system.debug(n.new_T[0].AccountNumber);

User userName=[select Id,Name from User where Id=:n.userId];
    
System.debug(UserName.Name);

String sub=' New Account has been created Notification from LWC';
String body='Account Number : '+n.new_T[0].AccountNumber+'\n'+'Account Name : '+n.new_T[0].Name;

EmailMissionSpecialist ex=new EmailMissionSpecialist();

//ex.sendMail('prasanthkishore004@gmail.com',sub,body);

     return n ;
}
@AuraEnabled(cacheable=true)
public static NewGeneratedAccounts getAccountObj()
{

 NewGeneratedAccounts x= SendMail();
   
    return x ;

}



}
