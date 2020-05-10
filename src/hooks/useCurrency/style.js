import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    cmb: {
        '& label.Mui-focused': {
            color: 'white',
            fontFamily: "'Bebas Neue', cursive",
            fontWeight: '2.4rem'
        },
        '& label': {
            color: 'white',
            fontFamily: "'Bebas Neue', cursive",
            fontWeight: '2.4rem',
            fontSize: '1.2rem'

        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'white',
        },
        '& .MuiInput-underline': {
            borderBottomColor: 'white',
        },
        '& .MuiInput-input:focus': {
            color: 'white',

        },
        '& .MuiInput-input': {
            color: 'white',

        },
        '& label..MuiInputLabel-outlined': {
            fontSize: 50
        },
        '& .MuiInputBase-input': {
            fontFamily: "'Bebas Neue', cursive",
            fontWeight: '2.4rem',
            fontSize: '1.2rem'
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'white',
            },

            '&:hover fieldset': {
                borderColor: 'white',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'white',
            },
            color: 'white',


        },
        '& .MuiIconButton-root': {
            color: '#f5f5f5',
        },
        marginTop: '2rem',
        width: '100%',

    },

}));
export default useStyles;