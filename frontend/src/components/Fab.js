import Button from '@mui/material/Button';
import { PlayArrow, StopRounded } from "@mui/icons-material";
import { createTheme,Stylesheet,TouchableOpacity } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

const theme = createTheme();

theme.spacing(2);
export default function Faab() {
    return (
        <>
        <Button
    style={{
        borderRadius: 15,
        backgroundColor: "#4a126b",
        padding: "10px 25px",
        alignItems: "center",
        fontSize: "14px"
    }}
    variant="contained"
    >
    <PlayArrow sx={{ mr: 0.5 }} />
    RUN
</Button>

<Button
    style={{
        borderRadius: 15,
        backgroundColor: "#1c2566",
        padding: "10px 25px",
        fontSize: "14px"
    }}
    variant="contained"
    >
    <StopRounded sx={{ mr: 0.5 }} />
    STOP
</Button>

</>
    )
};
