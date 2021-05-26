//Manage trips page
import styled from "styled-components";

const Manage = styled.div`
  margin-top: 100px;
`;
const Message = styled.div`
  margin: 50px auto;
  width: 50%;
  font-size: 30px;
  font-weight: bolder;
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
  height: 250px;
  border-right: 1px solid lightpink;
  width: 150px;
  margin-right: 20px;
  display: block;
  position: inline-block;
  font-weight: bold;
  font-size: 30px;
`;
const Details = styled.div`
  margin-top: 50px;
  width: calc(100% - 120px);
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
const Owner = styled.div`
  width: 100px;
`;
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
  height: 250px;
  border-right: 1px solid lightpink;
  width: 150px;
  margin-right: 20px;
  display: block;
  position: inline-block;
  font-weight: bold;
  font-size: 30px;
`;

function ManageSchedule() {
  return (
    <div>
      <Manage>
        <Message>You can manage your current and history trips here!</Message>
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
                <Owner>Owner: me</Owner>
              </EachTrip>
              <EachTrip>
                <TripName>Trip Name: Havana Heaven</TripName>
                <Location>Havana, Cuba</Location>
                <More>
                  <Date>Date: 2021/05/17~2021/05/28</Date>
                  <Share>Share with: _____________</Share>
                  <Link>Get link</Link>
                </More>
                <Owner>Owner: Shelly</Owner>
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
                <Owner>Owner: Phil</Owner>
              </EachTrip>
              <EachTrip>
                <TripName>Trip Name: Havana Heaven</TripName>
                <Location>Havana, Cuba</Location>
                <More>
                  <Date>Date: 2021/05/17~2021/05/28</Date>
                  <Share>Share with: _____________</Share>
                  <Link>Get link</Link>
                </More>
                <Owner>Owner: me</Owner>
              </EachTrip>
            </Details>
          </Past>
        </Trips>
      </Manage>
    </div>
  );
}

export default ManageSchedule;
