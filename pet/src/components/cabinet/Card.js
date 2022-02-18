/* eslint-disable */
import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import StarIcon from "@mui/icons-material/Star";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CardActionArea from "@mui/material/CardActionArea";
import moment from "moment";
import { Link, useNavigate } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export default function RecipeReviewCard({ project }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();
  const handleClickEdit = (e) => {
    e.preventDefault();
    navigate(`/projects/${project.id}/edit`);
  };
  return (
    <CardActionArea component={"div"} id="action_card">
      <Card sx={{ boxShadow: "0px 0px 3px blue" }}>
        <CardHeader
          avatar={
            <Avatar
              sx={{ bgcolor: red[500] }}
              src={project.projectImg}
              aria-label="recipe"
            >
              {project.title[0]}
            </Avatar>
          }
          action={
            <div>
              <IconButton
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <MoreVertIcon />
              </IconButton>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleClickEdit}>Редактировать</MenuItem>
              </Menu>
            </div>
          }
          title={project.title}
          subheader={moment(project.createdAt).format("YYYY-MM-DD")}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {project.description}
          </Typography>
        </CardContent>
        <CardActions
          sx={{ display: "flex", justifyContent: "space-between" }}
          disableSpacing
        >
          <Box>
            <IconButton aria-label="add to favorites">
              <StarIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </Box>
          <Box>
            <Button
              aria-label="view"
              onClick={(e) => {
                e.preventDefault();
                navigate(`/projects/${project.id}`);
              }}
            >
              Просмотр
            </Button>
          </Box>
        </CardActions>
      </Card>
    </CardActionArea>
  );
}
