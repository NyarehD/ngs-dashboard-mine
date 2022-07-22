import React, {useState} from "react"
import {
    Breadcrumbs, Button,
    Container, FormControl, Grid, IconButton, Select,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
import teamStyle from "./team.module.sass"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faAngleRight,
    faCircleChevronLeft,
    faCircleChevronRight,
    faPencil,
    faPlus,
    faTrash
} from "@fortawesome/free-solid-svg-icons"
import {Link} from "react-router-dom"
import MenuItem from "@mui/material/MenuItem";

const columns = [
    {
        id: 'id',
        label: "Id",
        minWidth: "50px"
    },
    {
        id: 'name',
        label: "Name",
        minWidth: '130px'
    },
    {
        id: 'email',
        label: "Email",
        minWidth: "210px"
    },
    {
        id: 'occupation',
        label: "Occupation",
        minWidth: "150px"
    },
    {
        id: "phone",
        label: "Phone",
        minWidth: "120px"
    },
    {
        id: "Info",
        label: "Info",
        minWidth: "50px"
    },
    {
        id: "actions",
        label: "Actions",
        minWidth: "120px"
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
    {
        id: 4,
        image: "./04.jpg",
        name: "Dean Whales",
        occupation: "Senior Executive",
        experience: 9,
        phone: "012-985-624",
        email: "deanwhales@MaxiCom.com",
        personalExp: "Pellentesque lorem mauris, vehicul"
    },
    {
        id: 5,
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
                   minWidth: column.minWidth,
               }}>{column.label}</TableCell>
))
const breadcrumbs = [
    <Link to="/" key="1" className={teamStyle.breadcrumbLink}>
        Home
    </Link>,
    <Typography key="2" className={`${teamStyle.breadcrumbLink} ${teamStyle.inActive}`}>
        Team
    </Typography>,
]
export default function Team() {
    const [teamSelect, setTeamSelect] = useState("mobile")

    function handleTeamChange(e) {
        setTeamSelect(e.target.value)
    }

    return (
        <Container maxWidth={false} className={teamStyle.teamContainer}>

            <Grid container justifyContent="space-between">
                <Grid item sm={4}>
                    <Breadcrumbs
                        separator={<FontAwesomeIcon icon={faAngleRight}/>}
                        aria-label="breadcrumb" className={teamStyle.breadcrumb}>
                        {breadcrumbs}
                    </Breadcrumbs>
                </Grid>
                <Grid item container md={5} justifyContent="space-between">
                    <Grid item sm={8}>
                        <FormControl fullWidth>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={teamSelect}
                                onChange={handleTeamChange}
                                className={teamStyle.teamSelect}
                            >
                                <MenuItem value="mobile" onClick={handleTeamChange}
                                          className={teamStyle.teamSelectItem}>Mobile</MenuItem>
                                <MenuItem value="backend" onClick={handleTeamChange}
                                          className={teamStyle.teamSelectItem}>Backend</MenuItem>
                                <MenuItem value="database" onClick={handleTeamChange}
                                          className={teamStyle.teamSelectItem}>Database</MenuItem>
                                <MenuItem value="website" onClick={handleTeamChange}
                                          className={teamStyle.teamSelectItem}>Website</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item sm={3}>
                        <Button variant="contained" className={teamStyle.addTeamIcon}><FontAwesomeIcon
                            icon={faPlus}/></Button>
                    </Grid>
                </Grid>
            </Grid>
            <TableContainer className={teamStyle.tableContainer}>
                <Table className={teamStyle.teamTable}>
                    <TableHead>
                        <TableRow>
                            {TableHeader}
                        </TableRow>
                    </TableHead>
                    <TableBody className={teamStyle.tableBody}>
                        {rows.map(row => (
                            <TableRow sx={{maxHeight: "100px"}} key={row.id}>
                                <TableCell scope="row">{row.id}</TableCell>
                                <TableCell scope="row">{row.name}</TableCell>
                                <TableCell scope="row">{row.email}</TableCell>
                                <TableCell scope="row">{row.occupation}</TableCell>
                                <TableCell scope="row">{row.phone}</TableCell>
                                <TableCell scope="row" className={teamStyle.view}>
                                    <Link to="/team/edit">View</Link>
                                </TableCell>
                                <TableCell scope="row" className={teamStyle.actions}>
                                    <IconButton aria-label="delete">
                                        <FontAwesomeIcon icon={faPencil} className={teamStyle.edit}/>
                                    </IconButton>
                                    <IconButton>
                                        <FontAwesomeIcon icon={faTrash} className={teamStyle.delete}/>
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Grid container justifyContent="space-between" className={teamStyle.pagination}>
                <Grid item md={1}>
                    <IconButton aria-label="delete">
                        <FontAwesomeIcon icon={faCircleChevronLeft} className={teamStyle.paginationIcon}/>
                    </IconButton>
                </Grid>
                <Grid item md={1}>
                    <IconButton aria-label="delete">
                        <FontAwesomeIcon icon={faCircleChevronRight} className={teamStyle.paginationIcon}/>
                    </IconButton>
                </Grid>
            </Grid>
        </Container>
    );
}