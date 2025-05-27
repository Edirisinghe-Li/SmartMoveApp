import React from 'react';
import './Ai.css';
import { MdAssistant } from "react-icons/md";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

const Ai = () => {
  return (
    <div className='ai-container'>
      <MdAssistant className='icon-ai'/>
      <br></br>
      <br></br>
      <br></br>
      <h4>Ai Assistant</h4>
      <p>How Can I Help You?</p>
      <br></br>
      <br></br>
      <TextField
        id="filled-textarea"
        label="Multiline Placeholder"
        placeholder="Placeholder"
        multiline
        variant="filled"
        InputProps={{
            style: {
            color: 'white', // Text color
            backgroundColor: 'rgba(255,255,255,0.1)', // Optional background
            },
        }}
        InputLabelProps={{
            style: {
            color: 'white', // Label color
            },
        }}
        sx={{
            width: '100%',
            '& .MuiFilledInput-root': {
            backgroundColor: 'rgba(255,255,255,0.1)', // Optional translucent fill
            color: 'white',
            },
            '& .MuiFilledInput-root:hover': {
            backgroundColor: 'rgba(255,255,255,0.15)',
            },
            '& .MuiFilledInput-root.Mui-focused': {
            backgroundColor: 'rgba(255,255,255,0.2)',
            },
            '& .MuiInputBase-input::placeholder': {
            color: 'white',
            opacity: 1,
            },
            '& .MuiFormLabel-root': {
            color: 'white',
            },
            '& .MuiFormLabel-root.Mui-focused': {
            color: 'white',
            },
        }}
        />
        <br></br>
        <TextField
        id="filled-textarea"
        label="Multiline Placeholder"
        placeholder="Placeholder"
        multiline
        variant="filled"
        InputProps={{
            style: {
            color: 'white', // Text color
            backgroundColor: 'rgba(255,255,255,0.1)', // Optional background
            },
        }}
        InputLabelProps={{
            style: {
            color: 'white', // Label color
            },
        }}
        sx={{
            width: '100%',
            mt: 3,
            '& .MuiFilledInput-root': {
            backgroundColor: 'rgba(255,255,255,0.1)', // Optional translucent fill
            color: 'white',
            },
            '& .MuiFilledInput-root:hover': {
            backgroundColor: 'rgba(255,255,255,0.15)',
            },
            '& .MuiFilledInput-root.Mui-focused': {
            backgroundColor: 'rgba(255,255,255,0.2)',
            },
            '& .MuiInputBase-input::placeholder': {
            color: 'white',
            opacity: 1,
            },
            '& .MuiFormLabel-root': {
            color: 'white',
            },
            '& .MuiFormLabel-root.Mui-focused': {
            color: 'white',
            },
        }}
        />
        <Stack direction="row" spacing={2}>
            <Button
            variant="contained"
            endIcon={<SendIcon />}
            sx={{
                backgroundColor: 'white',
                color: 'black',
                marginTop: '30px',
                '&:hover': {
                backgroundColor: '#e0e0e0',
                },
            }}
            >
            Send
            </Button>
        </Stack>
    </div>
  )
}

export default Ai
