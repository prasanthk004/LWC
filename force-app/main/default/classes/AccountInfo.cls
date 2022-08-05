public with sharing class AccountInfo {
 
    @AuraEnabled(cacheable=true)    

    public static List<Account> getAccountData()
    {

        return [Select Name,Phone,Website,AnnualRevenue from Account   ];
    }
   
    @AuraEnabled(cacheable=true)       
    public static List<Account> getAccountDataLimit()
    {

        return [Select Name,Phone,Website,AnnualRevenue from Account  LIMIT 10 ];
    }
   
}
