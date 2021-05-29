const globalTheme = {
    switchWidth: '40px',
    switchHeight: '20px',
    switchPadding: '3px',
    colorContrastLow: '#d3d3d4',
    colorWhite: '#FFF',
    switchColorPrimary: '#302C40',
    switchAnimationDuration: '0.2s',
    gradient: 'linear-gradient(122deg, rgba(128,74,216,1) 0%, rgba(98,75,217,1) 100%)',
    colorGreen: '#5DC399',
    colorGray: '#adadad',
}


export const lightTheme = {
    primary: '#FFF',
    secondary: '#F8F8F8',
    textColor: '#37474F',
    header: '#37474F',
    headerNumber: '#FFF',
    activeMenu: '#585280',
    ...globalTheme
}

export const darkTheme = {
    primary: '#37474F',
    secondary: '#455A64',
    textColor: '#FFF',
    header: '#FFF',
    headerNumber: '#585280',
    activeMenu: '#FFF',
    ...globalTheme
}