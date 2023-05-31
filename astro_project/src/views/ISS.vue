<template>
    <section class="iss-container">
        <section class="iss-inner">
            <section class="iss-header-container">
                <div>Live ISS Tracker</div>
            </section>
            <section class="iss-subheading">
                See the ISS location on the map below<br>
                The map updates every 20 seconds
            </section>
            <section class="map-grid">
                <section class="map-container">
                    <div ref="mapDivHere"  id="map"/>
                </section>
                <section class="iss-side-map">
                    <table>
                        <tr>
                            <th class="headings">Speed (km/h)</th>
                            <th class="headings">Altitude (km)</th>
                            <th class="headings">Time (UTC)</th>
                            <th class="headings">Visibility</th>
                        </tr>
                        <tr>
                            <td>{{ speed }}</td>
                            <td>{{ altitude }}</td>
                            <td>{{ time }}</td>
                            <td>{{ visibility }}</td>
                        </tr>
                    </table>
                    <div class="video-container">
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/86YLFOog4GM" frameborder="0" allowfullscreen autoplay></iframe>
                    </div>
                </section>
            </section>

            <div id="map-refresh-div" >Refresh Map</div>
        </section>
    </section>
</template>

<style>
.iss-container {
    padding: 2%;
}

.iss-header-container {
    font-size: 2.4em;
    text-align: center;
}

.iss-side-map {
    display: grid;
    grid-template-rows: 30% auto;
    row-gap: 7%;;
}

.iss-subheading {
    text-align: center;
    padding: 2.5%;
}

.video-container {
    border: solid 1px var(--primary-light);
}

#map {
    border: solid var(--primary-light) 1px;
    width:90%; 
    height:80vh;
    margin: 0 auto;
}

table {
    padding: 1%;
    border: solid 1px var(--primary-light);
    width: 100%;
    background-color: var(--primary-dark);
}

table .headings {
    font-size: 1.2em;
    border-bottom: solid var(--primary-light) .5px;
}

table .headings:hover {
    background-color: var(--secondary-dark);
    cursor: pointer;
}

table td {
    text-align: center;
    padding-top: 2%;;
}




.row {
    border: solid .5px var(--primary-light);
}

.map-grid {
    display: grid;
    grid-template-columns: 60% auto;
}


#map-refresh-div {
    width: 10%;
    color: rgb(80,80,80);
    padding: 5px;
    background-color: white;
    z-index: 1;
    position: absolute;
    top: 60%;
    margin-left: 3.5%;
    border: solid silver 1px;
    border-radius: 2.8px;;
}

#map-refresh-div:hover {
    background-color: rgb(235,235,235);
    cursor: pointer;
}


@media screen and (max-width: 450px) {
    .iss-container {
        padding: 1%;
        padding-top: 15%;
        height: 100vh;
    }

    .iss-side-map {
        row-gap: 10%;;
    }

    .map-grid {
        display: grid;
        grid-template-columns: 100%;
    }

    #map-refresh-div {
        width: 25%;
        margin-left: 5%;
    }

    #map {
        border: solid var(--primary-light) 1px;
        width:90%; 
        height:50vh;
    }

    .video-container {
        position: fixed;
        width: 40%;
        z-index: 9999;
        top: 83%;
        right: 2%;
        height: 15%;
        float: right;
    }

    .iss-subheading {
        padding: 3.5%;
    }

    table {
        margin-top: 10%;;
        padding: 4%;;
    }

}

</style>


<script >
/* eslint-disable-no-undef */

import { Loader } from '@googlemaps/js-api-loader'
import {ref, onMounted, onUnmounted} from 'vue'

const GOOGLE_MAPS_API_KEY = 'AIzaSyBkU3LEkHvrO8_kpSWGqobpFob-sESKlA8'
//const GOOGLE_MAPS_API_KEY = 'AIzaSyDTNOMjJP2zMMEHcGy2wMNae1JnHkGVvn0' 
export default {
    setup() {
        let map = ref(null)
        let destMarker = ref(null)

        let speed = ref(null)
        let time = ref(null)
        let altitude = ref(null)
        let visibility = ref(null)

        let futureTimeStamps = []
        
        const loader = new Loader({ apiKey: GOOGLE_MAPS_API_KEY})
        let mapDivHere = ref(null);
        let currPos = ref(null);
        
        onMounted(async () => {
          await loader.load() 

          drawMap()
          var refresh = document.getElementById("map-refresh-div")
          refresh.addEventListener("click", drawMap)
        })

        onUnmounted(async () => {
            
        })

        async function drawMap() {

            var res = await fetch("https://api.wheretheiss.at/v1/satellites/25544")
            var final = await res.json()

            console.log("final", final)

            var lat = parseFloat(final.latitude)
            var lng = parseFloat(final.longitude)

            altitude.value = parseInt(final.altitude)
            speed.value = parseFloat(final.velocity).toFixed(2)
            time.value = parseTimeDate(final.timestamp)
            visibility.value = final.visibility
            

            currPos.value = {lat: lat, lng: lng}
            map.value = new google.maps.Map(mapDivHere.value, {
                center: currPos.value,
                zoom: 5
             })
             
            updateMarker(map, lat, lng)

            setInterval(async () => {
                var res = await fetch("https://api.wheretheiss.at/v1/satellites/25544")
                var final = await res.json()

            var lat = parseFloat(final.latitude)
            var lng = parseFloat(final.longitude)

            altitude.value = parseInt(final.altitude)
            speed.value = parseFloat(final.velocity).toFixed(2)
            time.value = parseTimeDate(final.timestamp)
            visibility.value = final.visibility

            currPos.value = {lat: lat, lng: lng}
            map.value = new google.maps.Map(mapDivHere.value, {
                center: currPos.value,
                zoom: 5
             })
             
            updateMarker(map, lat, lng)

            }, 60000)
        }

        function updateMarker(map, lat, lng) {
            destMarker.value = new google.maps.Marker({
                position: {lat: lat, lng: lng},
                map: map.value
            })

          lat = lat.toString()
          lng =  lng.toString()
          var contentString = "<b style='color:black;'>Current ISS Location<br><i>Lat: "+lat+"<br>Lng: "+lng+"</i></b>"
          const issWindow = new google.maps.InfoWindow({
            content: contentString,
            ariaLabel: "ISS",
          });

          
            issWindow.open({
                anchor: destMarker.value,
                map: map.value,
                });
            
        }

        function parseTimeDate(t) {
            const date = new Date(t * 1000);

            const hours = date.getUTCHours().toString().padStart(2, '0');
            const minutes = date.getUTCMinutes().toString().padStart(2, '0');
            const seconds = date.getUTCSeconds().toString().padStart(2, '0');

            const timeString = hours + ':' + minutes + ':' + seconds;
            return timeString
        }

        async function getFuture() {
            var currentTime = Date.now()
            var baseTime = Math.floor(currentTime / 1000)

            var futureTimes = [];
            var url = "https://api.wheretheiss.at/v1/satellites/25544/positions?timestamps="+baseTime
            for (var i = 0; i < 45; i++) { //ISS roundtrip takes roughly 90 minutes 
                var futureTime = baseTime + (120 * i); //get location every 2 minute interval
                futureTimes.push(futureTime.toString());
                url += ","+futureTime.toString()
            }

            var res = await fetch(url)
            var final = await res.json()

            var listOfCoords = []

            for (var point in final) {
                var lat = final[point].latitude
                var lng = final[point].longitude
                var item = {
                    lat: lat, 
                    lng: lng
                }
                listOfCoords.push(item)
                futureTimeStamps.push(final[point].timestamp)
            }

            console.log("futture iss", final)
            return listOfCoords
        }

        var listOfPoints = getFuture()
        listOfPoints.then(data => {
            console.log("data", data)
            listOfPoints = data
            drawPoints(listOfPoints)
        })

        function drawPoints(listOfPoints) { //wait a second to draw the lines to ensure all data has been resolved from the promise
            setTimeout(() => {
                var polyline = new google.maps.Polyline({
                path: listOfPoints,
                strokeColor: '#EE0011',
                strokeOpacity: 0.75,
                strokeWeight: 2,
                strokeStyle: 'solid',
                map: map.value
            }) 
            drawCircles(listOfPoints)
            }, 1000);

        }


        function drawCircles(listOfPoints) {
            for (var point in listOfPoints) {
                const locCircle = new google.maps.Circle({
                strokeColor: "#FF0000",
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: "#FF0000",
                fillOpacity: 0.6,
                map: map.value,
                center: listOfPoints[point],
                radius: 25000
                });

                const infowindow = new google.maps.InfoWindow({
                    content: "<b style='color:black;'>"+convertUNIXtoDate(futureTimeStamps[point])+"</b>",
                    ariaLabel: "Time",
                });

                locCircle.addListener("click", () => {
                    infowindow.setPosition(locCircle.center)
                    infowindow.open({
                        anchor: locCircle,
                        map,
                    });
                });
            }
        }

        function convertUNIXtoDate(num) {
            var date = new Date(num*1000)

            var hours = date.getHours().toString()
            var mins = date.getMinutes()

            mins = (mins < 10) ? '0'+ mins : mins

            return hours + ":" + mins 
        }

        return {currPos, mapDivHere, speed, time, altitude, visibility}
    },
    methods: {

    }
}
</script>