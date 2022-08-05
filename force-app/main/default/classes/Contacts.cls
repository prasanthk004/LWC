public with sharing class Contacts {
    
    @AuraEnabled(cacheable=true)    

    public static List<Contact> getContacts()
    {

        return [Select Name from Contact];
    }
}
