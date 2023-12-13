import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import theme from "../../theme";
import { Box, FormControl, MenuItem, Paper, Select } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { closeDial } from "../../state/Close/closeSlice";

const BootstrapDialog = styled(Dialog)(() => ({
  "& .MuiDialogContent-root": {
    height: "60vh",
  },
  "& .MuiDialogActions-root": {},
}));

const MyIcon = styled(ArrowForwardOutlinedIcon)(({ theme }) => ({
  fill: theme.palette.buttonColor.fourth,
}));

export default function Modal() {
  const sure = useSelector((state) => state.close.value);
  const type = useSelector((state) => state.modalType);

  const dispatch = useDispatch();
  let variable = type.string === "Add Test" ? "a test" : "action";
  return (
    <React.Fragment>
      <BootstrapDialog
        onClose={() => dispatch(closeDial())}
        aria-labelledby="customized-dialog-title"
        open={sure}
        maxWidth="md"
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          <Box
            sx={{
              display: "flex",

              p: "1rem 2rem",
            }}
          >
            {type.icon}
            <Typography
              variant="h6"
              color={"#000000"}
              fontSize={"32px"}
              fontWeight={"bold"}
            >
              {type.string}
            </Typography>
          </Box>
        </DialogTitle>
        <IconButton
          aria-label="close"
          fontSize="large"
          onClick={() => dispatch(closeDial())}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            m: "1rem 1rem",
            color: theme.palette.buttonColor.primary,
          }}
        >
          <CloseIcon />
        </IconButton>
        <Paper sx={{ height: "80%" }}>
          <DialogContent>
            <Box
              sx={{
                width: "800px",
                height: "90%",
                overflow: "hidden",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <FormControl
                sx={{
                  width: "450px",
                  mt: "3rem",
                }}
              >
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={10}
                  autoWidth
                  IconComponent={KeyboardArrowDownIcon}
                  sx={{
                    p: "0.25rem 0.5rem",
                    color: theme.palette.text.primary,
                    ".MuiOutlinedInput-notchedOutline": {
                      borderColor: theme.palette.buttonColor.primary,
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: theme.palette.buttonColor.primary,
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: theme.palette.buttonColor.primary,
                    },
                    ".MuiSvgIcon-root ": {
                      fontSize: "2.5rem",
                      fontWeight: "Regular",
                    },
                  }}
                >
                  <MenuItem value={10}>
                    <Typography
                      variant="h6"
                      color={theme.palette.text.secondary}
                      fontSize={"16px"}
                      fontWeight={500}
                    >
                      Select a Provider
                    </Typography>
                  </MenuItem>
                </Select>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={10}
                  autoWidth
                  IconComponent={KeyboardArrowDownIcon}
                  sx={{
                    mt: "1.5rem",
                    p: "0.25rem 0.5rem",
                    color: theme.palette.text.primary,
                    ".MuiOutlinedInput-notchedOutline": {
                      borderColor: theme.palette.buttonColor.primary,
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: theme.palette.buttonColor.primary,
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: theme.palette.buttonColor.primary,
                    },
                    ".MuiSvgIcon-root ": {
                      fontSize: "2.5rem",
                      fontWeight: "Regular",
                    },
                  }}
                >
                  <MenuItem value={10}>
                    <Typography
                      variant="h6"
                      color={theme.palette.text.secondary}
                      fontSize={"16px"}
                      fontWeight={500}
                    >
                      {`Select ${variable}`}
                    </Typography>
                  </MenuItem>
                </Select>
              </FormControl>
              <Button
                autoFocus
                size="large"
                onClick={() => dispatch(closeDial())}
                variant="contained"
                endIcon={<MyIcon />}
                sx={{
                  background: theme.palette.buttonColor.third,
                  transition: `background 0.3s ease-in-out, color 0.3s ease-in-out`,
                  "&:hover": {
                    background: theme.palette.buttonColor.third,
                    color: theme.palette.buttonColor.third,
                  },
                }}
              >
                <Typography
                  padding="0.25rem 0.25rem"
                  variant="h6"
                  color={theme.palette.buttonColor.fourth}
                  fontSize={"14px"}
                  fontWeight={500}
                  textAlign="center"
                >
                  {type.string}
                </Typography>
              </Button>
            </Box>
          </DialogContent>
        </Paper>
      </BootstrapDialog>
    </React.Fragment>
  );
}
