import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    btn:{
        fontFamily: "'Bebas Neue', cursive",
        marginTop:'20px',
        fontWeight: 'bold',
        padding: '10px',
        backgroundColor: '#66A2FE',
        border: 'none',
        width:  '100%',
        borderRadius: '10px',
        color: '#FFF',
        transition: 'backgroud-color .3s ease',
        '&:hover' :{
            backgroundColor: '#326AC0',
            
        }
    },
    typo:{
        fontFamily: "'Bebas Neue', cursive",
        color: '#FFF',
        fontWeight: '700',      
    }
}));
export default useStyles;