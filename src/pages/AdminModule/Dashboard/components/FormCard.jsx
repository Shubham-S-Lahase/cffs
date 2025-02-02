import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import FormCardListElement from "../elements/FormCardListElement";

import { deleteForm } from "../../../../store/adminSlice";
import { formatDate } from "../../../../services/helperFunctions";


const FormSvg = "/assets/form.svg";

const FormCard = ({ data }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEdit = () => {
    if (data?.id) navigate("/admin/form/" + data?.id);
  };

  const handleSubmission = () => {
    if (data?.id) navigate("/admin/submission/" + data?.id);
  };

  const handleDelete = () => {
    if (data?.id) dispatch(deleteForm(data?.id));
  };

  return (
    <Card
      variant="outlined"
      sx={{
        height: "350px",
        width: "300px",
        boxShadow: 2,
        borderRadius: 2,
        cursor: "pointer",
      }}
    >
      <CardHeader
        sx={{
          backgroundColor: data?.isPublished ? "#F5D563" : "#5578F4",
          height: "70px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          p: 1.5,
        }}
        avatar={
          <Avatar
            alt="form-svg"
            src={FormSvg}
            sx={{ height: "100%", width: "100%" }}
          />
        }
      />
      <CardContent
        sx={{
          width: "100%",
          height: "calc(100% - 70px)",
          justifyContent: "space-between",
          display: "flex",
          flexDirection: "column",
          paddingY: 1.5,
          "&:last-child": {
            paddingBottom: 1.5,
          },
        }}
      >
        <Box
          sx={{
            width: "100%",
            justifyContent: "start",
            display: "flex",
            flexDirection: "column",
            gap: 1.5,
          }}
        >
          <Typography
            sx={{ fontSize: "20px", color: "#000000", fontWeight: 500 }}
          >
            {data?.title || ""}
          </Typography>
          {data?.isPublished && (
            <FormCardListElement
              title={"Submitted"}
              value={data?.submitted || 0}
            />
          )}
          {data?.isPublished && (
            <FormCardListElement title={"Viewed"} value={data?.viewed || 0} />
          )}
          <FormCardListElement
            title={"Published On"}
            value={
              data?.isPublished
                ? formatDate(data?.publishedOn) || "Invalid Timestamp"
                : "Not Yet"
            }
          />
        </Box>
        <Box
          sx={{
            width: "100%",
            justifyContent: "start",
            display: "flex",
            flexDirection: "column",
            gap: 1.5,
          }}
        >
          {data?.isPublished && (
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                sx={{ fontSize: "15px", fontWeight: 500 }}
                onClick={handleSubmission}
              >
                VIEW SUBMISSION
              </Button>
            </Box>
          )}
          <Box sx={{ display: "flex", gap: 1, justifyContent: "center" }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{ fontSize: "15px", fontWeight: 500 }}
              onClick={handleEdit}
            >
              EDIT
            </Button>
            <Button
              variant="contained"
              color="success"
              size="large"
              sx={{ fontSize: "15px", fontWeight: 500 }}
              onClick={handleDelete}
            >
              DELETE
            </Button>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

FormCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    isPublished: PropTypes.bool,
    submitted: PropTypes.number,
    viewed: PropTypes.number,
    publishedOn: PropTypes.string,
  }).isRequired,
};

export default FormCard;
