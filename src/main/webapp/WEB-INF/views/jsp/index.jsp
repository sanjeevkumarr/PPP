<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Gradle + Spring MVC</title>

        <spring:url value="/resources/core/css/hello.css" var="coreCss" />
        <spring:url value="/resources/core/css/bootstrap.min.css" var="bootstrapCss" />
        <spring:url value="/resources/core/js/ppplusdcc.js" var="ppplus1" />
        <link href="${bootstrapCss}" rel="stylesheet" />
        <link href="${coreCss}" rel="stylesheet" />
        

        <!--<script src="https://www.paypalobjects.com/webstatic/ppplus/ppplus.min.js" type="text/javascript"></script>-->
        <!--<script src="https://www.paypalobjects.com/webstatic/ppplusdcc/ppplusdcc.min.js" type="text/javascript"></script>-->
        <script src="${ppplus1}" type="text/javascript"></script>
    </head>

    <!--
    <nav class="navbar navbar-inverse navbar-fixed-top">
            <div class="container">
                    <div class="navbar-header">
                            <a class="navbar-brand" href="#">Project Name</a>
                    </div>
            </div>
    </nav>
    
    <div class="jumbotron">
            <div class="container">
                    <h1>${title}</h1>
                    <p>
    <c:if test="${not empty msg}">
            Hello ${msg}
    </c:if>

    <c:if test="${empty msg}">
            Welcome Welcome!
    </c:if>
</p>
<p>
    <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
</p>
</div>
</div>

<div class="container">

<div class="row">
<div class="col-md-4">
    <h2>Heading</h2>
    <p>ABC</p>
    <p>
            <a class="btn btn-default" href="#" role="button">View details</a>
    </p>
</div>
<div class="col-md-4">
    <h2>Heading</h2>
    <p>ABC</p>
    <p>
            <a class="btn btn-default" href="#" role="button">View details</a>
    </p>
</div>
<div class="col-md-4">
    <h2>Heading</h2>
    <p>ABC</p>
    <p>
            <a class="btn btn-default" href="#" role="button">View details</a>
    </p>
</div>
</div>


<hr>
<footer>
<p>&copy; Mkyong.com 2015</p>
</footer>
</div>


    -->




    <div id="ppplus" > </div>



    <!--   
    <script type="application/javascript">
            var ppp = PAYPAL.apps.PPP({
            "approvalUrl": "${approval_url}",
            "placeholder": "ppplus",
            //            "payerFirstName": "Ryan",
            //            "payerLastName": "Ryan",
            //            "payerEmail": "sanjeev@brazil.com",
            //            "payerPhone": "6802304988",
            //            "language": "de-DE",
            //            "buttonLocation ": "outside",
            //            "disableContinue":"continueButton",
            //            "enableContinue": "continueButton",
            "mode": "sandbox",});
    
    //            "disableContinue":"continueButton",
//            "enableContinue": "continueButton",                    
//            "payerFirstName" :"test",
//            "payerLastName" :"buyer",
//            "payerEmail" :"paypal2-buyer@rsantosit.com.br",
//            "payerPhone" :"1234567892",
//            "payerTaxId" :"30949017787",
//            "payerTaxIdType" :"BR_CPF",

        </script>
    -->    
    <!--<iframe src="${approval_url}"> </iframe>-->

    <script type="application/javascript">
            var ppp = PAYPAL.apps.PPP({
                "approvalUrl": "${approval_url}",
                "placeholder": "ppplus",
                "mode": "sandbox",                                
                "payerFirstName": "test",                               
                "payerLastName": "buyer",                                
                "payerEmail": "paypal2-buyer@rsantosit.com.br",                                
                "payerTaxId": "30949017787", 
                "buttonLocation": "outside",               
                "enableContinue": "continueButton",
            });


    </script> 



    <script type="text/javascript">

function myFunction() {
    window.open("${approval_url}", "_blank", "width=1024,height=768,location=1,resizable=1,scrollbars=1,status=1", true);
}

    </script>

    <!--
            function myFunction() {
                window.open("${approval_url}", "_blank", "width=1024,height=768,location=1,resizable=1,scrollbars=1,status=1", true);
            }
        </script>-->


    <button id="continueButton" onclick="ppp.doContinue();">Checkout
    </button>


</body>
</html>
