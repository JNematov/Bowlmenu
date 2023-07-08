const HoursLocation = () =>  (
        <div className="hours-location">
            <h1>Hours & Location</h1>
            <div className="content">
                <h2>Monday</h2>
                <p>closed</p>
                <h2>Tuesday-Sunday</h2>
                <p>11:00 am - 9:00 pm</p>
                <br />
                <p>8650 Spicewood Springs Rd ste 119</p>
                <p>Austin, TX 78759</p>
                <p className="phone-number">512-992-0128</p>
            </div>
            <iframe title="hours" id="gmap_canvas" src="https://maps.google.com/maps?q=bowlmenu&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        </div>
    );


export default HoursLocation;