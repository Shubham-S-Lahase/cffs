import { Avatar, Box, Typography } from "@mui/material";
import PropTypes from "prop-types";

const face1Svg = "/assets/face1.svg";
const face2Svg = "/assets/face2.svg";
const face3Svg = "/assets/face3.svg";
const face4Svg = "/assets/face4.svg";
const face5Svg = "/assets/face5.svg";

const SmileyRating = ({ value, onChange, error }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          minHeight: "40px",
          gap: 2,
          flexWrap: "wrap",
        }}
      >
        <Avatar
          alt="face1-svg"
          src={face1Svg}
          sx={{
            height: "40px",
            width: "40px",
            cursor: "pointer",
            backgroundColor: value === "Angry" ? "#849DF4" : "#FFFFFF",
            border: value === "Angry" ? "2px solid #849DF4" : "none",
          }}
          onClick={() => onChange("Angry")}
        />
        <Avatar
          alt="face2-svg"
          src={face2Svg}
          sx={{
            height: "40px",
            width: "40px",
            cursor: "pointer",
            backgroundColor: value === "Sad" ? "#849DF4" : "#FFFFFF",
            border: value === "Sad" ? "2px solid #849DF4" : "none",
          }}
          onClick={() => onChange("Sad")}
        />
        <Avatar
          alt="face3-svg"
          src={face3Svg}
          sx={{
            height: "40px",
            width: "40px",
            cursor: "pointer",
            backgroundColor: value === "Neutral" ? "#849DF4" : "#FFFFFF",
            border: value === "Neutral" ? "2px solid #849DF4" : "none",
          }}
          onClick={() => onChange("Neutral")}
        />
        <Avatar
          alt="face4-svg"
          src={face4Svg}
          sx={{
            height: "40px",
            width: "40px",
            cursor: "pointer",
            backgroundColor: value === "Happy" ? "#849DF4" : "#FFFFFF",
            border: value === "Happy" ? "2px solid #849DF4" : "none",
          }}
          onClick={() => onChange("Happy")}
        />
        <Avatar
          alt="face5-svg"
          src={face5Svg}
          sx={{
            height: "40px",
            width: "40px",
            cursor: "pointer",
            backgroundColor: value === "Excited" ? "#849DF4" : "#FFFFFF",
            border: value === "Excited" ? "2px solid #849DF4" : "none",
          }}
          onClick={() => onChange("Excited")}
        />
      </Box>
      {error?.trim() && (
        <Typography
          sx={{
            fontSize: "13px",
            color: "#d32f2f",
            fontWeight: 400,
            mt: "2px",
          }}
        >
          {error}
        </Typography>
      )}
    </>
  );
};

SmileyRating.propTypes = {
  value: PropTypes.oneOf(["Angry", "Sad", "Neutral", "Happy", "Excited"]),
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};

export default SmileyRating;
