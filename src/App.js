import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
import LoopIcon from '@mui/icons-material/Loop';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Tooltip from '@mui/material/Tooltip';
import React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { styled } from '@mui/material/styles';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
    width: 32,
    height: 32,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2,
  },
}));

function App() {

  const [open, setOpen] = React.useState(false);
  const [erroropen, setErrorOpen] = React.useState(false);
  const [changeopen, setChangeOpen] = React.useState(false);


  const handleClick = () => {
    setOpen(true);
  };

  const handleChangeClick = () => {
    setChangeOpen(true);
  };


  const handleClickError = () => {
    setErrorOpen(true);
  };


  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleErrorClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setErrorOpen(false);
  };

  const handleChangeClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setChangeOpen(false);
  };
  const [swbgcolor,setSwBgColor] = useState('white');
  const bgcolor = () => {
    if (swbgcolor=='white'){
      setSwBgColor('black')
      console.log(swbgcolor)
    } else {
      setSwBgColor('white')
      console.log(swbgcolor)
    }
  }




  const [inputvalue, setInputValue] = useState();
  const inputhandler = event => {
    setInputValue(event.target.value)
    console.log('value is:', event.target.value);
  };
  const [newtodo, setNewTodo] = useState ([])
  const [counter,setCounter] = useState(5)
  const addnewtodo = () => {
    if (inputvalue.length>0){
    setTodos([...todos,{id:counter,todo:inputvalue,durum:"Tamamlanmadı"}])
    setCounter(counter+1)
    handleClick() }
  }
  const deletebutton = (info) => {
    console.log(info)
    const deletefilter = todos.filter(deletefilterfunc)
    function deletefilterfunc (todo) {
      return (
        todo.id!==info
      )
    }
    setTodos(deletefilter)
    handleClickError()
  }
  const changestat = (id) => {
    let findindex;
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id==id){
        findindex=i;
      }
    } 
    
    if (todos[findindex].durum=="Tamamlanmadı"){
        let newArr = [...todos];
        newArr[findindex].durum ="Tamamlandı"
        setTodos(newArr)
        handleChangeClick()
    } else {
      let newArr = [...todos];
      newArr[findindex].durum ="Tamamlanmadı"
      setTodos(newArr)
      handleChangeClick()
  }


    const changefilter = todos.filter(changefil)
    function changefil (data) {
      return (
        data.id==id
      )
    }
    
  }
  const [todos, setTodos] = useState([{id:1,todo:"Ekmek alınacak",durum:"Tamamlanmadı"},{id:2,todo:"Yemek yapılacak",durum:"Tamamlandı"},{id:3,todo:"Ödev yapılacak",durum:"Tamamlanmadı"},{id:4,todo:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",durum:"Tamamlanmadı"}]);
  return (
    <div className="App" style={{backgroundColor:swbgcolor}}>
      <FormGroup style={{marginTop:20}}>
        <FormControlLabel
          control={<MaterialUISwitch sx={{ m: 1 }}  />}
          label={swbgcolor=='black' ? "Gece Modu" : "Gündüz Modu"}
          style={{color:(swbgcolor=='black' ? 'white' : "")}}
          onChange={() => bgcolor()}
        />
      </FormGroup>
      <div className='container'>
        <div className='textarea' style={{color:(swbgcolor=='black' ? 'white' : "")}}>
          <TextField className="todoinput" id="outlined-basic" label="Yapılacaklar listesi öğesini giriniz." variant="outlined" onChange={inputhandler} style={{backgroundColor:(swbgcolor=='black' ? 'grey' : ""),borderRadius:5,borderStyle:(swbgcolor=='black' ? 'solid' : ""),borderColor:(swbgcolor=='black' ? 'white' : "")}}/>
          <div className="todoinputbutton">
            <Tooltip title="Yeni bir yapılacaklar listesi öğesi eklemek için tıklayınız." placement="bottom"><Button id="todobutton" variant="contained" onClick={addnewtodo} style={{background:(swbgcolor=='black' ? 'grey' : "")}}>Oluştur</Button></Tooltip>
          </div>
        </div>
        <div className='todoarea'>
          <TableContainer component={Paper} style={{boxShadow: (swbgcolor=='black' ? '0px 0px 0px black' : '0px 5px 10px grey')}}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table" style={{background:(swbgcolor=='black' ? 'grey' : ""),borderStyle:(swbgcolor=='black' ? 'solid' : ""),borderColor:(swbgcolor=='black' ? 'white' : "")}}>
              <TableHead>
                <TableRow >
                  <TableCell>Yapılacaklar</TableCell>
                  <TableCell align="center">Durum</TableCell>
                  <TableCell align="center">Durumu değiştir</TableCell>
                  <TableCell align="right">Sil</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {todos.map((row) => (
                  <TableRow id={row.id}>
                    <Tooltip title={row.todo} placement="left"><TableCell  component="th" scope="row" style={{color:(swbgcolor=='black' ? 'white' : "")}}>
                      {row.todo.length<50 ? row.todo : <div id="eyekismi">{row.todo.slice(0,50)+"..."+"\xa0\xa0\xa0\xa0\xa0\xa0\xa0"}<Tooltip title="Metnin tamamını gör"><RemoveRedEyeIcon className="seeicon" style={{color:(swbgcolor=='black' ? 'white' : "")}}/ ></Tooltip></div> }
                    </TableCell></Tooltip>
                    {row.durum=="Tamamlanmadı" ? <Tooltip title="İçerik henüz tamamlanmamış." placement="bottom"><TableCell style={{color:(swbgcolor=='black' ? 'black':'red')}}align="center">{row.durum}</TableCell></Tooltip> : <Tooltip title="İçerik tamamlandı."><TableCell style={{color:(swbgcolor=='black' ? 'white':'green')}}align="center">{row.durum}</TableCell></Tooltip>}
                    <TableCell align="center"><Tooltip title="Durumu Değiştir"><LoopIcon id="loopicon" onClick={() => changestat(row.id)} style={{color:(swbgcolor=='black' ? 'white' : "")}} /></Tooltip></TableCell>
                    <TableCell align="right"><Tooltip title="Sil"><DeleteIcon id="deleteicon" onClick={() => deletebutton(row.id)} style={{color:(swbgcolor=='black' ? 'white' : "")}}/></Tooltip></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Yeni yapılacaklar listesi öğresi başarıyla oluşturuldu.
        </Alert>
      </Snackbar>
      <Snackbar open={erroropen} autoHideDuration={3000} onClose={handleErrorClose}>
        <Alert onClose={handleErrorClose} severity="warning" sx={{ width: '100%' }}>
          Yapılacaklar listesi öğesi başarıyla silindi.
        </Alert>
      </Snackbar>
      <Snackbar open={changeopen} autoHideDuration={3000} onClose={handleChangeClose}>
        <Alert onClose={handleChangeClose} severity="info" sx={{ width: '100%' }}>
          Yapılacaklar listesi öğesinin tamamlanma durumu başarıyla değiştirildi.
        </Alert>
      </Snackbar>

      </div>
    </div>
    
  );
}

export default App;
