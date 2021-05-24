//Manage trips page
import styled from "styled-components";

const Manage = styled.div`
  margin-top: 100px;
`;
const Profile = styled.div`
  margin: 50px auto;
  width: 50%;
  border-bottom: 1px solid darkblue;
`;
const Photo = styled.img`
  margin: 0 auto;
  text-align: center;
  position: inline-block;
  text-align: center;
  width: 100px;
  height: 100px;
  display: block;
`;
const Name = styled.div`
  margin: 0px auto;
  font-size: 30px;
  width: fit-content;
`;
const Email = styled.div`
  margin: 0px auto;
  font-size: 30px;
  width: fit-content;
`;
const Map = styled.div`
  margin-top: 100px;
  width: 80%;
  margin: 0 auto;
  height: 300px;
  border: 1px solid darkgoldenrod;
`;
const Marker = styled.div`
  margin-top: 100px;
`;
const Trips = styled.div`
  margin-top: 100px;
  width: 80%;
  margin: 0 auto;
`;
const Current = styled.div`
  margin-top: 50px;
  display: flex;
  align-items: center;
`;
const CurrentTrips = styled.div`
  margin-top: 50px;
  height: 200px;
  border-right: 1px solid lightpink;
  width: 100px;
  margin-right: 20px;
  display: block;
  position: inline-block;
`;
const Details = styled.div`
  margin-top: 50px;
  width: calc(100% - 100px);
`;
const EachTrip = styled.div`
  border: 1px solid lightgrey;
  align-items: center;
  display: flex;
  justify-content: space-around;
  height: 100px;
  margin-bottom: 10px;
`;
const TripName = styled.div``;
const Location = styled.div``;
const More = styled.div``;
const Date = styled.div``;
const Share = styled.div`
  margin-top: 20px;
`;
const Link = styled.div`
  margin-top: 20px;
`;
const Past = styled.div`
  margin-top: 50px;
  display: flex;
  align-items: center;
  margin-bottom: 100px;
`;
const HistoryTrips = styled.div`
  margin-top: 50px;
  height: 200px;
  border-right: 1px solid lightpink;
  width: 100px;
  margin-right: 20px;
  display: block;
  position: inline-block;
`;

function ManageSchedule() {
  return (
    <div>
      <Manage>
        <h1>You can manage your current and history trips here!</h1>
        <Profile>
          <Photo />
          <Name>Name: Ellie Yang</Name>
          <Email>Email: isabelleya927@gmail.com</Email>
        </Profile>
        <Map>
          <Marker></Marker>
        </Map>
        <Trips>
          <Current>
            <CurrentTrips>Current Trips</CurrentTrips>
            <Details>
              <EachTrip>
                <TripName>Trip Name: Havana Heaven</TripName>
                <Location>Havana, Cuba</Location>
                <More>
                  <Date>Date: 2021/05/17~2021/05/28</Date>
                  <Share>Share with: _____________</Share>
                  <Link>Get link</Link>
                </More>
              </EachTrip>
              <EachTrip>
                <TripName>Trip Name: Havana Heaven</TripName>
                <Location>Havana, Cuba</Location>
                <More>
                  <Date>Date: 2021/05/17~2021/05/28</Date>
                  <Share>Share with: _____________</Share>
                  <Link>Get link</Link>
                </More>
              </EachTrip>
            </Details>
          </Current>
          <Past>
            <HistoryTrips>History Trips</HistoryTrips>
            <Details>
              <EachTrip>
                <TripName>Trip Name: Havana Heaven</TripName>
                <Location>Havana, Cuba</Location>
                <More>
                  <Date>Date: 2021/05/17~2021/05/28</Date>
                  <Share>Share with: _____________</Share>
                  <Link>Get link</Link>
                </More>
              </EachTrip>
              <EachTrip>
                <TripName>Trip Name: Havana Heaven</TripName>
                <Location>Havana, Cuba</Location>
                <More>
                  <Date>Date: 2021/05/17~2021/05/28</Date>
                  <Share>Share with: _____________</Share>
                  <Link>Get link</Link>
                </More>
              </EachTrip>
            </Details>
          </Past>
        </Trips>
      </Manage>
    </div>
  );
}

export default ManageSchedule;
