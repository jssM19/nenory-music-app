import React from "react";
import styled from "@mui/material/styles/styled";
import { makeStyles } from "@mui/styles";
import InputAdornment from "@mui/material/InputAdornment";
import {
    Grid,
    Link,
    TextField,
    Button,
    Typography,
    FormControl,
    IconButton,
} from "@mui/material";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const useStyles = makeStyles((theme) => ({
    text: { color: "#666" },
}));

const GridRoot = styled(Grid)(({ theme }) => ({
    margin: "8px auto",
    padding: theme.spacing(1),
    border: "1px solid #ddd",
    borderRadius: 10,
    maxWidth: 400,
}));

const Login = () => {
    const classes = useStyles();
    const emailRef = React.useRef(null);
    const passwordRef = React.useRef(null);
    const errorRef = React.useRef(null);
    const [showPassword, setShowPassword] = React.useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;
    };

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <GridRoot container spacing={1}>
            <Grid item xs={12}>
                <Grid container justifyContent="center">
                    <AccountCircleIcon
                        className={classes.text}
                        fontSize="large"
                    />
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Typography
                    className={classes.text}
                    variant="h5"
                    align="center"
                >
                    Iniciar sesión
                </Typography>
            </Grid>

            <Grid item xs={12}>
                <FormControl fullWidth>
                    <TextField
                        id="email"
                        label="Correo electrónico"
                        type="email"
                        inputRef={emailRef}
                    />
                </FormControl>
            </Grid>

            <Grid item xs={12}>
                <FormControl fullWidth>
                    <TextField
                        id="password"
                        label="Contraseña"
                        type={showPassword ? "text" : "password"}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? (
                                            <VisibilityOff />
                                        ) : (
                                            <Visibility />
                                        )}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                        inputRef={passwordRef}
                    />
                </FormControl>
            </Grid>

            <Grid item xs={12}>
                <Link href="/password-reset">
                    <Typography variant="body2">
                        ¿Olvidaste tu contraseña?
                    </Typography>
                </Link>
            </Grid>

            <Grid item xs={12}>
                <Button
                    variant="contained"
                    type="submit"
                    fullWidth
                    onClick={handleSubmit}
                >
                    Iniciar sesión
                </Button>
            </Grid>
        </GridRoot>
    );
};

export default Login;
