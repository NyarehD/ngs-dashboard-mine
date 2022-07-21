import React from "react"
import {Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography} from "@mui/material";

const columns = [
    {
        id: 'id',
        label: "Id",
        minWidth: "50px"
    },
    {
        id: 'image',
        label: "Image",
        minWidth: "150px"
    },
    {
        id: 'name',
        label: "Name",
        minWidth: "80px"
    },
    {
        id: 'occupation',
        label: "Occupation",
        minWidth: "120px"
    },
    {
        id: "experience",
        label: "Experience",
        minWidth: "50px"
    },
    {
        id: 'phone',
        label: "Phone",
        minWidth: "130px"
    },
    {
        id: 'email',
        label: "Email",
        minWidth: "210px"
    },
    {
        id: 'personalExp',
        label: "Personal Experience",
        minWidth: "300px"
    }
]
const rows = [
    {
        id: 1,
        image: "./logo512.png",
        name: "Dean Whales",
        occupation: "Senior Executive",
        experience: 9,
        phone: "012-985-624",
        email: "deanwhales@MaxiCom.com",
        personalExp: "Doloremque quam. Exercitation totam or cupidatat culpa but autem. In labore so nostrud asper natur officia magna, so quasi. Sit nequeporro dolor Iure. Pellentesque lorem mauris, vehicula vel nulla nec. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ab ad dolor repudiandae consequatur voluptates neque, soluta atque sit sapiente dolores numquam, quos corrupti illum facilis tempora ducimus ratione nostrum! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro maxime atque reprehenderit provident velit non voluptatem eum delectus, minus eos voluptas quia? Iste sit accusantium similique quos, omnis harum nulla! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae quas vel, dolores animi, asperiores fugiat quis ipsa sequi quos, obcaecati optio similique temporibus modi labore. Eaque illum nisi modi consequatur!"
    },
    {
        id: 2,
        image: "./logo.png",
        name: "Dean Whales",
        occupation: "Senior Executive",
        experience: 9,
        phone: "012-985-624",
        email: "deanwhales@MaxiCom.com",
        personalExp: "Doloremque quam. Exercitation totam or cupidatat culpa but autem. In labore so nostrud asper natur officia magna, so quasi. Sit nequeporro dolor Iure. Pellentesque lorem mauris, vehicula vel nulla nec. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ab ad dolor repudiandae consequatur voluptates neque, soluta atque sit sapiente dolores numquam, quos corrupti illum facilis tempora ducimus ratione nostrum! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro maxime atque reprehenderit provident velit non voluptatem eum delectus, minus eos voluptas quia? Iste sit accusantium similique quos, omnis harum nulla! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae quas vel, dolores animi, asperiores fugiat quis ipsa sequi quos, obcaecati optio similique temporibus modi labore. Eaque illum nisi modi consequatur!"
    },
    {
        id: 3,
        image: "./04.jpg",
        name: "Dean Whales",
        occupation: "Senior Executive",
        experience: 9,
        phone: "012-985-624",
        email: "deanwhales@MaxiCom.com",
        personalExp: "Pellentesque lorem mauris, vehicul"
    },
]
// Table Header
const TableHeader = columns.map(column => (
    <TableCell component="th" scope="row" key={column.id}
               sx={{
                   fontWeight: "bold",
                   fontSize: "1rem",
                   // To make header text center for Image
                   textAlign: (column.id === "image") ? "center" : "left",
                   minWidth: column.minWidth
               }}>{column.label}</TableCell>
))
export default function Team() {

    return (
        <Container
            maxWidth={false}
            sx={{
                paddingTop: "20px",
                paddingBottom: "20px",
                minHeight: "100vh",
                backgroundColor: 'rgb(205, 220, 236)'
            }}
        >
            <Typography variant="h4" sx={{margin: "5rem 0 1rem"}}>Team Management</Typography>
            <TableContainer sx={{marginTop: "30px"}}>
                <Table sx={{maxWidth: "500px"}}>
                    <TableHead>
                        <TableRow>
                            {TableHeader}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => (
                            <TableRow sx={{maxHeight: "100px"}} key={row.id}>
                                <TableCell scope="row">{row.id}</TableCell>
                                <TableCell scope="row" sx={{display: "flex"}}>
                                    <img src={row.image} alt="Personal"
                                         style={{height: "110px", objectFit: "contain", margin: "0 auto"}}/>
                                </TableCell>
                                <TableCell scope="row">{row.name}</TableCell>
                                <TableCell scope="row">{row.occupation}</TableCell>
                                <TableCell scope="row">{row.experience} years</TableCell>
                                <TableCell scope="row">{row.phone}</TableCell>
                                <TableCell scope="row">{row.email}</TableCell>
                                <TableCell
                                    scope="row">{row.personalExp.length >= 50 ? row.personalExp.slice(1, 150) + "..." : row.personalExp}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}