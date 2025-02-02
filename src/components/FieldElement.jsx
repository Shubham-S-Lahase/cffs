import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
const editDarkSvg = "/assets/edit_dark.svg";
const deleteDarkSvg = "/assets/delete_dark.svg";

/**
 * Wrapper for user feedback form fields.
 */
const FieldElement = ({
  title,
  handleEdit,
  handleDelete,
  children,
  isEditOn = false,
  hideActions = false,
}) => {
  return (
    <Card
      variant="outlined"
      sx={{
        width: "100%",
        maxWidth: "500px",
        boxShadow: 2,
        borderRadius: 1,
        backgroundColor: isEditOn ? "#E1E8FF" : "#FFFFFF",
        height: "fit-content",
        overflow: "visible",
      }}
    >
      <CardHeader
        sx={{
          width: "100%",
          px: 1,
          pt: 1.5,
          pb: 1,
        }}
        title={
          <Typography
            sx={{ fontSize: "14px", color: "#232323", fontWeight: 400 }}
          >
            {title || ""}
          </Typography>
        }
      />
      <CardContent
        sx={{
          width: "100%",
          padding: 1,
          "&:last-child": {
            paddingBottom: 1.5,
          },
        }}
      >
        {children}
      </CardContent>
      {!hideActions && (
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "end",
            gap: 0.5,
            p: 1,
            mr: 0.5,
          }}
        >
          <Avatar
            alt="edit-dark-svg"
            src={editDarkSvg}
            sx={{
              height: "25px",
              width: "25px",
              borderRadius: "0",
              cursor: "pointer",
            }}
            onClick={handleEdit}
          />
          <Avatar
            alt="delete-dark-svg"
            src={deleteDarkSvg}
            sx={{
              height: "25px",
              width: "25px",
              borderRadius: "0",
              cursor: "pointer",
            }}
            onClick={handleDelete}
          />
        </CardActions>
      )}
    </Card>
  );
};

FieldElement.propTypes = {
  title: PropTypes.string,
  handleEdit: PropTypes.func,
  handleDelete: PropTypes.func,
  children: PropTypes.node,
  isEditOn: PropTypes.bool,
  hideActions: PropTypes.bool,
};

export default FieldElement;
