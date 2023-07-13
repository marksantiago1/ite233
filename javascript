<html>
<head>

<title>JavaScript Onclick event</title>
</head>
<style>
    div{
        margin-top: 40%;
    }
</style>
<script>
    function ChangeTitle(){
        document.getElementById("changetitle").innerHTML = "JavaScript Onclick Event";
    }
    function ChangeText(){
        document.getElementById("changetext").innerHTML = "The Airbus A330 is a wide-body aircraft developed and produced by Airbus. Airbus conceived several derivatives of the A300, its first airliner from the mid-1970s. Then the company began development on the A330 twinjet in parallel with the A340 quadjet and launched both designs with their first orders in June 1987.";
    }
</script>
<BODY BGCOLOR = "white">
<form>
    <center>
    <p id="changetitle">JS Button Function</p>
    <p id="changetext">The Airbus A321neo is a single-aisle airliner created by Airbus. The A321neo is developed from the Airbus A321 & Airbus A320neo family. It is the longest stretched fuselage of Airbus's A320 series, & the newest version of the A321, with the original A321ceo debuting in 1994 with Lufthansa.</p>
    <div>
    <input type = "button" value = "RED" onClick = "document.bgColor = 'red'">
    <input type = "button" value = "ORANGE" onClick = "document.bgColor = 'orange'">
    <input type = "button" value = "YELLOW" onClick = "document.bgColor = 'yellow'">
    <input type = "button" value = "GREEN" onClick = "document.bgColor = 'green'">
    <input type = "button" value = "BLUE" onClick = "document.bgColor = 'blue'">
    <input type = "button" value = "INDIGO" onClick = "document.bgColor = 'indigo'">
    <input type = "button" value = "VIOLET" onClick = "document.bgColor = 'violet'">
    <button type="button" onclick="ChangeTitle()">CHANGE TITLE</button>
    <button type="button" onclick="ChangeText()">CHANGE TEXT</button>  
    </div>
</center>  
</body>
</html>
