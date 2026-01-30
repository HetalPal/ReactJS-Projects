function Key({ label, action }){
    return <button onClick={() => action(label)}>{label}</button>;
}

export default Key;
