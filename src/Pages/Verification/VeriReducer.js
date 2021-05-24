import { useSelector, useDispatch } from "react-redux";

// 以前寫法
const [userData, setUserData] = useState([]);
setUserData(firebaseUserData);

// Redux 寫法
const dispatch = useDispatch();
const userData = useSelector((state) => state.userData);
const activityData = useSelector((state) => state.activityData); //跟redux拿資料

dispatch({ type: "UPDATE_USERDATA", data: firebaseUserData });
dispatch({ type: "UPDATE_ACTIVITYDATA", data: firebaseActivityData });
