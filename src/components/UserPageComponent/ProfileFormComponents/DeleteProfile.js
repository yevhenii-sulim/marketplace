import { useState } from "react";
import { DeleteProfileButton } from "./ProfilePage.styled";
import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";

export default function DeleteProfile() {

  const [openConfirmationDialog, setOpenConfirmationDialog] = useState(false);

  const openDialog = () => {
    setOpenConfirmationDialog(true);
  }

  const closeDialog = () => {
    setOpenConfirmationDialog(false);
  }

  const DialogStyle = {
    "& .MuiDialog-container": {
      "& .MuiPaper-root": {
        width: "100%",
        height: '100%',
        maxWidth: "424px",
        maxHeight: '240px',
        padding: '40px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: '10px'
      },
    },
  };

  const DialogTitleStyle = {
    font: '600 16px "Nunito Sans"',
    textAlign: 'center'
  };

  const DialogActionsStyle = {
    display: 'flex',
    justifyContent: 'space-between'
  };

  const DialogAcceptButton = {
    width: '148px',
    height: '44px',
    borderRadius: '6px',
    border: '1px solid #43C550',
    font: '800 18px "Nunito Sans"',
    color: '#43C550',
    textTransform: 'none'
  };

  const DialogDeclineButton = {
    width: '148px',
    height: '44px',
    borderRadius: '6px',
    font: '800 18px "Nunito Sans"',
    color: '#fff',
    backgroundColor: '#43C550',
    textTransform: 'none',
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: '#40a74a'
    }
  };

  return (
    <>
      <DeleteProfileButton onClick={openDialog}>
        Видалити профіль
      </DeleteProfileButton>
      <Dialog 
        open={openConfirmationDialog}
        onClose={closeDialog}
        sx={DialogStyle}
      >
        <DialogTitle sx={DialogTitleStyle}>
          Бажаєте вийти з акаунту?
        </DialogTitle>
        <DialogActions sx={DialogActionsStyle}>
          <Button onClick={closeDialog} sx={DialogAcceptButton}>
            Так, вийти
          </Button>
          <Button onClick={closeDialog} sx={DialogDeclineButton}>
            Залишитись
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}