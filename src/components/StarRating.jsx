import { Avatar, Box, Typography } from "@mui/material";
import PropTypes from "prop-types";
const starSvg = "/assets/star.svg";
const starActiveSvg = "/assets/star_active.svg";

/**
 * Star rating field component.
 */
const StarRating = ({ value, onChange, length = 5, error }) => {
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
        {Array.from({ length }, (_, i) => i + 1).map((_) =>
          _ <= value ? (
            <Avatar
              key={_}
              alt="star-svg"
              src={starActiveSvg}
              sx={{
                height: "30px",
                width: "30px",
                borderRadius: "0",
                cursor: "pointer",
              }}
              onClick={() => onChange(_)}
            />
          ) : (
            <Avatar
              key={_}
              alt="star-active-svg"
              src={starSvg}
              sx={{
                height: "30px",
                width: "30px",
                borderRadius: "0",
                cursor: "pointer",
              }}
              onClick={() => onChange(_)}
            />
          )
        )}
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

StarRating.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  length: PropTypes.number,
  error: PropTypes.string,
};

export default StarRating;
