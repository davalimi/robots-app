import React, { Component } from 'react';
//On a vue props, state mais aussi on peut utiliser Children, CardList est le children de Scroll
//Chaque props a un Children
// on peut return props.childre => il ne se passe rien
// mais on peut aussi return <h1>Salut</h1>
//Si on fait console.log(props)=>on peut trouver type=CardList

const Scroll = (props) => {
	return <div style={{ overflowY: 'scroll', border: '2px solid black', height: '800px' }}>{props.children}</div>;
};

export default Scroll;
