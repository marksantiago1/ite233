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
        document.getElementById("changetext").innerHTML = "The Airbus A330neo for New Engine Option is a wide-body airliner developed by Airbus from the Airbus A330 now A330ceo Current Engine Option. 4 A new version with modern engines comparable with those developed for the Boeing 787 was called for by operators of the original A330 series. It was launched on 14 July 2014 at the Farnborough Airshow, promising 14% better fuel economy per seat. It is exclusively powered by the Rolls-Royce Trent 7000 which has double the bypass ratio of its predecessor. Its two versions are based on the A330-200 and -300: the -800 has a range of 8,150 nmi (15,090 km; 9,380 mi) with 257 passengers while the -900 covers 7,200 nmi (13,330 km; 8,290 mi) with 287 passengers. The -900 made its maiden flight on 19 October 2017 and received its EASA type certificate on 26 September 2018; it was first delivered to TAP Air Portugal on 26 November 2018 and entered service on 15 December. The -800 made its first flight on 6 November 2018 and received EASA type certification on 13 February 2020; the first two -800s were delivered to Kuwait Airways on 29 October 2020 and entered service on 20 November. As of June 2023, a total of 295 A330neo family aircraft had been ordered by more than 25 customers, of which 104 aircraft had been delivered.";
    }
</script>
<BODY BGCOLOR = "white">
<form>
    <center>
    <h1 id="changetitle">JS Button Function</h1>
    <p id="changetext">What is Airbus a330?</p>
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
