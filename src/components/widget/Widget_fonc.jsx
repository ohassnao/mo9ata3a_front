import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { useState, useEffect } from 'react';
import axios from 'axios';


const Widget_fonc = ({ type }) => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    const [count4, setCount4] = useState(0);

    let data;
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/citoyen/count');
                setCount(response.data); // Assuming the count value is directly returned from the API
            } catch (error) {
                console.error('Error fetching count:', error);
            }
        };

        fetchData();
        const fetchData2 = async () => {
            try {
                const response2 = await axios.get('http://localhost:8080/fonc_inscri/count');
                setCount2(response2.data); // Assuming the count value is directly returned from the API
            } catch (error) {
                console.error('Error fetching count:', error);
            }
        };

        fetchData2();
        const fetchData3 = async () => {
            try {
                const response3 = await axios.get('http://localhost:8080/demande_inscri/count');
                setCount3(response3.data); // Assuming the count value is directly returned from the API
            } catch (error) {
                console.error('Error fetching count:', error);
            }
        };

        fetchData3();

        const fetchData4 = async () => {
            try {
                const response4 = await axios.get('http://localhost:8080/demande_legal/count');
                setCount4(response4.data); // Assuming the count value is directly returned from the API
            } catch (error) {
                console.error('Error fetching count:', error);
            }
        };

        fetchData4();

    }, []);

    //temporary

    switch (type) {
        case "user":
            data = {
                title: "Citoyen",
                amount: count,
                isMoney: false,
                link: "",
                icon: (
                    <PersonOutlinedIcon
                        className="icon"
                        style={{
                            color: "crimson",
                            backgroundColor: "rgba(255, 0, 0, 0.2)",
                        }}
                    />
                ),
            };
            break;
        case "order":
            data = {
                title: "Fonctionnaire",
                amount: count2,
                isMoney: false,
                link: "",
                icon: (
                    <PersonOutlinedIcon
                        className="icon"
                        style={{
                            backgroundColor: "rgba(218, 165, 32, 0.2)",
                            color: "goldenrod",
                        }}
                    />
                ),
            };
            break;
        case "earning":
            data = {
                title: "demande de l'égalisation",
                isMoney: false,
                link: "",
                icon: (
                    <AccountBalanceWalletOutlinedIcon
                        className="icon"
                        style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
                    />
                ),
            };
            break;
        case "balance":
            data = {
                title: "Demande d'inscription",
                amount: count3,
                isMoney: false,
                link: "",
                icon: (
                    <AccountBalanceWalletOutlinedIcon
                        className="icon"
                        style={{
                            backgroundColor: "rgba(128, 0, 128, 0.2)",
                            color: "purple",
                        }}
                    />
                ),
            };
            break;
        default:
            break;
    }

    return (
        console.log("hhh", count),
        console.log("ff", count2),
        console.log(count3),
        <div className="widget">
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">
                    {data.isMoney && "$"} {data.amount}
                </span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUpIcon />
                    {data.diff} %
                </div>
                {data.icon}
            </div>
        </div>
    );
};

export default Widget_fonc;
