import { useSelector, useDispatch } from "react-redux";

// 以前寫法
// const [userData, setUserData] = useState([]);
// setUserData(firebaseUserData);

// Redux 寫法
const dispatch = useDispatch();
const userEmail = useSelector((state) => state.userEmail);
const userName = useSelector((state) => state.userName);
const userUID = useSelector((state) => state.userUID);

dispatch({ type: "UPDATE_USEREMAIL", data: firebaseUserData });
dispatch({ type: "UPDATE_USERNAME", data: firebaseActivityData });
dispatch({ type: "UPDATE_USERUID", data: firebaseActivityData });
