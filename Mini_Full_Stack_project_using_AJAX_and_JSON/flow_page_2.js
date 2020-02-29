function onchange_call(val)   //value comes here
{
    let xml=new XMLHttpRequest();    //in order to make request to the server we need to make this object.
  let url="flow_page_3.php?key="+val;   //sending our data i.e email we selected on html page through URL (Recall sending data thru url lec in PHP)
    url=url+"&sid="+Math.random();   //Attaching randomly generated variable so that each time different url is produced (yet calling the same PHP file) so that we dont load he same URL due to cache memory. 
    

    xml.open("GET",url,true);  //open() and send() method present in class XMLHttpRequest
    xml.send();  //when send method is called our URL gets hit, so PHP file is loaded.

    /* Now from here the real deal starts.
        our flow of control is in .PHP file and at the same time it is in this file(Remember AJAX is asynchronus)
        In .PHP file we are going through various stages, these are as follows:

        a)  0 --> uninitialized (request not initliazed)
        b)  1 -->  loading      (request is initialized)
        c)  2--> loaded         (request is sent)
        d)  3--> interactive    (Interacting with database)
        e)  4--> complete       (request is complete)    


        This value is incremented internally inside a variable called 'readyState' which is present in class XMLHttpRequest.
        When this value becomes 1 from 0, 'onreadystatechange' event is fired(given below), which will execute the below
        given anonymous(nameless) function. Thus every time internally 'readyState' is incremented, the function is called.
        Thus the function will be called 4 times as 'readyState' becomes 1,2,3,4 and when it becomes 4, that means our request is complete
        and that code in .PHP file is fully executed and "echo json_encode" file is returned which is taken by the
        variable 'responseText' and is given to 'document.getElementById('tt').innerHTML'.
        Now 'document.getElementById('tt').innerHTML' this line puts the retrived data to our HTML page, inside the tag,
        where id="tt".  And thus we see our o/p at the same HTML page. Thats it. 

        CONCLUSION: USing only html and php, new page was loaded each time we pressed the submit button. And on that page
        we were getting our o/p. BUt AJAX is faster. we get out o/p on the same page.
        
        */

    
    

    xml.onreadystatechange=function()   //starts calling fucntion when readyState starts to "CHANGE".
    {
        
        alert("Hi Sanket");

        if((xml.readyState==4)&&(xml.status==200))
        {
            document.getElementById('tt').innerHTML=xml.responseText;   //echo json_encode come here and value is printed in between html tags where id is 'tt'

        }

    }

}
