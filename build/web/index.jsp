<%-- 
    Document   : index
    Created on : Nov 10, 2015, 3:47:33 PM
    Author     : Karen
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Karen's Books</title>
        <link rel="stylesheet" href="css/chase.css" />
        <script type="text/javascript" src="js/chase.js"></script>
    </head>
    <body>
        <%@page import="java.util.*,java.text.DateFormat" %>
        <%
            Date date = new Date();
            String formatedDate = DateFormat.getDateInstance(DateFormat.MEDIUM).format(date);
        %>
            
        <header> 
            <table>
                <tr>
                    <td class="logo" style="width: 15%"></td> 
                    <td class="PageHeading">Product Line</td>
                </tr>
                <tr>
                    <td class="cdate" id="cdate" colspan="2"> </td>
                </tr>
            </table>
        </header>
       
        <form action="LogInServlet" method="post">
            <h1>What is your e-mail address?</h1>
            <br>
            <br>
            <h2>My e-mail address is: <input type="email" name="email"/></h2> 
            
            <br>
            <h1>Do you have a Chase password?</h1>
            <br>
            <br>
            <input type="radio"  name="checkPasswd" value="has_password" checked=""/> 
            Yes, I have a password: <input type="password" id="password" name="password" pattern="[A-Z,a-z,0-9_-]+" />
            <br>
            <input type="radio"  name="checkPasswd" value="no_password"/> No, I am not a customer.
            
            <br> <br>
            <button id='btnLogin'>Sign in using our secure server</button>
        </form>
    </body>
</html>
