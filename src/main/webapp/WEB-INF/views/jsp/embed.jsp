<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>payment</title>

        <script type="text/javascript">

            function myFunction() {
                window.open("${approval_url}", "_blank", "width=1024,height=768,location=1,resizable=1,scrollbars=1,status=1", true);
            }
        </script>
    </head>


    <body onload="myFunction();">



        <script type="application/javascript">
            var ppp = PAYPAL.apps.PPP({
            "approvalUrl": "${approval_url}",
            "placeholder": "ppplus",
            "mode": "sandbox",
            "country": "USD"
            });

        </script> 






        <button type="submit"          
                id="continueButton"
                onclick="myFunction()">Checkout
        </button>


    </body>
</html>