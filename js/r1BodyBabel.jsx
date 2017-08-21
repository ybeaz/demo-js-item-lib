

const 	ReactDOM			= require('react-dom');		//import ReactDOM			from 'react-dom';
const 	React 				= require('react');			//import React 				from 'react';
const 	{ createStore } 	= require('redux'); 		//import { createStore }	from 'redux';
const 	{combineReducers} 	= require('redux'); 		//import {combineReducers}	from 'redux';
const 	deepFreeze 			= require('deep-freeze'); 	//import deepFreeze			from 'deep-freeze';	//var deepFreeze = require('deep-freeze');
const 	expect 				= require('expect.js'); 	//import expect				from 'expect.js';	//Expect - minimalistic BDD assertion toolkit based on should.js
const 	assert 				= require('assert'); 		//import assert				from 'assert'; //var assert = require('assert');

//We begin to test
import letsTest from './letsTest.jsx';
//letsTest('START', /* testId */ '', /* expect */ [], /* toEqual */ [] );



//Testing "Item library" example from Baranov Arseny SiteSoft.ru
(() => {
	//console.info(' expect(1).to.eql(1):', expect(1).to.eql(1));

	//Creating actions, reducers, store, combineReducers
	let modelApp = {
		items: [
			{id: 0, name: "item1", favorite: true, rating: 4, prop1: 'value11', prop2: 'value12', prop3: 'value13', prop4: 'value14', prop5: 'value15'},
			{id: 1, name: "item2", favorite: false, rating: 3, prop1: 'value21', prop2: 'value22', prop3: 'value23', prop4: 'value24', prop5: 'value25'},
			{id: 2, name: "item3", favorite: false, rating: 0, prop1: 'value31', prop2: 'value32', prop3: 'value33', prop4: 'value34', prop5: 'value35'},
			{id: 3, name: "item4", favorite: false, rating: 0, prop1: 'value41', prop2: 'value42', prop3: 'value43', prop4: 'value44', prop5: 'value45'},
			{id: 4, name: "item5", favorite: false, rating: 0, prop1: 'value51', prop2: 'value52', prop3: 'value53', prop4: 'value54', prop5: 'value55'},
			{id: 5, name: "item6", favorite: false, rating: 0, prop1: 'value61', prop2: 'value62', prop3: 'value63', prop4: 'value64', prop5: 'value65'},
			{id: 6, name: "item7", favorite: false, rating: 0, prop1: 'value71', prop2: 'value72', prop3: 'value73', prop4: 'value74', prop5: 'value75'},
			{id: 7, name: "item8", favorite: false, rating: 0, prop1: 'value81', prop2: 'value82', prop3: 'value83', prop4: 'value84', prop5: 'value85'},
			{id: 8, name: "item9", favorite: false, rating: 0, prop1: 'value91', prop2: 'value92', prop3: 'value93', prop4: 'value94', prop5: 'value95'},
			{id: 9, name: "item10", favorite: false, rating: 0, prop1: 'value101', prop2: 'value102', prop3: 'value103', prop4: 'value104', prop5: 'value105'},
			{id: 10, name: "item11", favorite: false, rating: 0, prop1: 'value111', prop2: 'value112', prop3: 'value113', prop4: 'value114', prop5: 'value115'},
			{id: 11, name: "item12", favorite: false, rating: 0, prop1: 'value121', prop2: 'value112', prop3: 'value123', prop4: 'value124', prop5: 'value125'},
			{id: 12, name: "item13", favorite: false, rating: 0, prop1: 'value131', prop2: 'value132', prop3: 'value133', prop4: 'value134', prop5: 'value135'},
			{id: 13, name: "item14", favorite: false, rating: 0, prop1: 'value141', prop2: 'value142', prop3: 'value143', prop4: 'value144', prop5: 'value145'},
			{id: 14, name: "item15", favorite: false, rating: 0, prop1: 'value151', prop2: 'value152', prop3: 'value153', prop4: 'value154', prop5: 'value155'},
			{id: 15, name: "item16", favorite: false, rating: 0, prop1: 'value161', prop2: 'value162', prop3: 'value163', prop4: 'value164', prop5: 'value165'},
			{id: 16, name: "item17", favorite: false, rating: 0, prop1: 'value171', prop2: 'value172', prop3: 'value173', prop4: 'value174', prop5: 'value175'},
			{id: 17, name: "item18", favorite: false, rating: 0, prop1: 'value181', prop2: 'value182', prop3: 'value183', prop4: 'value184', prop5: 'value185'},
			{id: 18, name: "item19", favorite: false, rating: 0, prop1: 'value191', prop2: 'value192', prop3: 'value193', prop4: 'value194', prop5: 'value195'},
			{id: 19, name: "item20", favorite: false, rating: 0, prop1: 'value201', prop2: 'value202', prop3: 'value203', prop4: 'value204', prop5: 'value205'},
			{id: 20, name: "item21", favorite: false, rating: 0, prop1: 'value211', prop2: 'value212', prop3: 'value213', prop4: 'value214', prop5: 'value215'},
			{id: 21, name: "item22", favorite: false, rating: 0, prop1: 'value221', prop2: 'value212', prop3: 'value223', prop4: 'value224', prop5: 'value225'},
			{id: 22, name: "item23", favorite: false, rating: 0, prop1: 'value231', prop2: 'value232', prop3: 'value233', prop4: 'value234', prop5: 'value235'},
			{id: 23, name: "item24", favorite: false, rating: 0, prop1: 'value241', prop2: 'value242', prop3: 'value243', prop4: 'value244', prop5: 'value245'},
			{id: 24, name: "item25", favorite: false, rating: 0, prop1: 'value251', prop2: 'value252', prop3: 'value253', prop4: 'value254', prop5: 'value255'},
			{id: 25, name: "item26", favorite: false, rating: 0, prop1: 'value261', prop2: 'value262', prop3: 'value263', prop4: 'value264', prop5: 'value265'},
			{id: 26, name: "item27", favorite: false, rating: 0, prop1: 'value271', prop2: 'value272', prop3: 'value273', prop4: 'value274', prop5: 'value275'}			
		],
		visibilityFilter: {name: 'all', on: true},
		visibilityRange: {start: 0, finish: 9}
	};
	//letsTest('modelApp', /* testId */ '', /* expect */ modelApp, /* toEqual */ [] );	
	
	//Reducer for film item: Add and Toggle case todo
	const changeItem = (state = {}, action) => {
		let newState 	=	{};
		
		switch (action.type){ 		
			case 'toggle_fav':
				if(state.id != action.payload.id){ newState = state}
				else{
					newState = Object.assign({}, state, {favorite: !state.favorite});
				}
				return newState;
			case 'change_rating':
				if(state.id != action.payload.id || action.payload === undefined){ newState = state}
				else{
					newState = Object.assign({}, state, {rating: action.payload.rating});
				}
				return newState;
			case 'change_item':
				if(state.id != action.payload.id || action.payload === undefined){ newState = state}
				else{
					newState = Object.assign({}, state, 
					   {prop1: action.payload.prop1, 
						prop2: action.payload.prop2, 
						prop3: action.payload.prop3, 
						prop4: action.payload.prop4, 
						prop5: action.payload.prop5});
				}
				//letsTest('Reducer->changeItem()', /* testId */ '', /* expect */ [state, newState], /* toEqual */ [] );
				return newState;			

			default: return state;
		}
	}	

	//Reducer for adding items to the collection
	const items	= (state = [], action) => {
		
		switch (action.type){ 
		case 'add_item':
			return [...state,
					   {id:			action.payload.id,
						name:		action.payload.name,
						favorite:	action.payload.favorite,
						rating:		action.payload.rating,
						prop1:		action.payload.prop1, 
						prop2:		action.payload.prop2, 
						prop3:		action.payload.prop3, 
						prop4:		action.payload.prop4, 
						prop5:		action.payload.prop5}
			];
		case 'toggle_fav': 
		case 'change_rating':
		case 'change_item':
			let stateTemp 	=	[];
			return stateTemp = state.map(t => changeItem(t, action));
		
		default: return state;
		}
		
	}
	
	//Reducer for visibilityFilter
	const visibilityFilter = (state = {name: 'all', on: true}, action) => {
		//letsTest('visibilityFilter', /* testId */ '', /* expect */ [state,action], /* toEqual */ [] );	
		let newState 	=	{};
		switch (action.type){
			case 'set_visibility_filter': return newState = Object.assign({}, state, action.payload);
			default: return state;
		};
	};

	//Reducer for visibilityPage
	const visibilityRange = (state = {start: 0, finish: 9}, action) => {
		//letsTest('visibilityFilter', /* testId */ '', /* expect */ state, /* toEqual */ [] );	
		let newState 	=	{};
		switch (action.type){
			case 'set_visibility_range': return newState = Object.assign({}, state, action.payload);
			default: return state;
		};
	};
	
	
	//Reducer general
	/*	Analogy of the below
	const todoApp = (state = {}, action) => {
		
		return {
			todos: 				todos(state.todos, action),
			visibilityFilter:	visibilityFilter(state.visibilityFilter, action)
		};
	}; */	
	const itemsApp	=	combineReducers({
		items,
		changeItem,
		visibilityFilter,
		visibilityRange
	});
	deepFreeze(itemsApp);
	
	//let store = createStore();
	const store		=	createStore(itemsApp);
	let action		=	{};
	
	//Setting initial values to the store
		let itemsInit	=	[
			{id: 0, name: "item1", favorite: true, rating: 4, prop1: 'value11', prop2: 'value12', prop3: 'value13', prop4: 'value14', prop5: 'value15'},
			{id: 1, name: "item2", favorite: false, rating: 3, prop1: 'value21', prop2: 'value22', prop3: 'value23', prop4: 'value24', prop5: 'value25'},
			{id: 2, name: "item3", favorite: false, rating: 0, prop1: 'value31', prop2: 'value32', prop3: 'value33', prop4: 'value34', prop5: 'value35'},
			{id: 3, name: "item4", favorite: false, rating: 0, prop1: 'value41', prop2: 'value42', prop3: 'value43', prop4: 'value44', prop5: 'value45'},
			{id: 4, name: "item5", favorite: false, rating: 0, prop1: 'value51', prop2: 'value52', prop3: 'value53', prop4: 'value54', prop5: 'value55'},
			{id: 5, name: "item6", favorite: false, rating: 0, prop1: 'value61', prop2: 'value62', prop3: 'value63', prop4: 'value64', prop5: 'value65'},
			{id: 6, name: "item7", favorite: false, rating: 0, prop1: 'value71', prop2: 'value72', prop3: 'value73', prop4: 'value74', prop5: 'value75'},
			{id: 7, name: "item8", favorite: false, rating: 0, prop1: 'value81', prop2: 'value82', prop3: 'value83', prop4: 'value84', prop5: 'value85'},
			{id: 8, name: "item9", favorite: false, rating: 0, prop1: 'value91', prop2: 'value92', prop3: 'value93', prop4: 'value94', prop5: 'value95'},
			{id: 9, name: "item10", favorite: false, rating: 0, prop1: 'value101', prop2: 'value102', prop3: 'value103', prop4: 'value104', prop5: 'value105'},
			{id: 10, name: "item11", favorite: false, rating: 0, prop1: 'value111', prop2: 'value112', prop3: 'value113', prop4: 'value114', prop5: 'value115'},
			{id: 11, name: "item12", favorite: false, rating: 0, prop1: 'value121', prop2: 'value112', prop3: 'value123', prop4: 'value124', prop5: 'value125'},
			{id: 12, name: "item13", favorite: false, rating: 0, prop1: 'value131', prop2: 'value132', prop3: 'value133', prop4: 'value134', prop5: 'value135'},
			{id: 13, name: "item14", favorite: false, rating: 0, prop1: 'value141', prop2: 'value142', prop3: 'value143', prop4: 'value144', prop5: 'value145'},
			{id: 14, name: "item15", favorite: false, rating: 0, prop1: 'value151', prop2: 'value152', prop3: 'value153', prop4: 'value154', prop5: 'value155'},
			{id: 15, name: "item16", favorite: false, rating: 0, prop1: 'value161', prop2: 'value162', prop3: 'value163', prop4: 'value164', prop5: 'value165'},
			{id: 16, name: "item17", favorite: false, rating: 0, prop1: 'value171', prop2: 'value172', prop3: 'value173', prop4: 'value174', prop5: 'value175'},
			{id: 17, name: "item18", favorite: false, rating: 0, prop1: 'value181', prop2: 'value182', prop3: 'value183', prop4: 'value184', prop5: 'value185'},
			{id: 18, name: "item19", favorite: false, rating: 0, prop1: 'value191', prop2: 'value192', prop3: 'value193', prop4: 'value194', prop5: 'value195'},
			{id: 19, name: "item20", favorite: false, rating: 0, prop1: 'value201', prop2: 'value202', prop3: 'value203', prop4: 'value204', prop5: 'value205'},
			{id: 20, name: "item21", favorite: false, rating: 0, prop1: 'value211', prop2: 'value212', prop3: 'value213', prop4: 'value214', prop5: 'value215'},
			{id: 21, name: "item22", favorite: false, rating: 0, prop1: 'value221', prop2: 'value212', prop3: 'value223', prop4: 'value224', prop5: 'value225'},
			{id: 22, name: "item23", favorite: false, rating: 0, prop1: 'value231', prop2: 'value232', prop3: 'value233', prop4: 'value234', prop5: 'value235'},
			{id: 23, name: "item24", favorite: false, rating: 0, prop1: 'value241', prop2: 'value242', prop3: 'value243', prop4: 'value244', prop5: 'value245'},
			{id: 24, name: "item25", favorite: false, rating: 0, prop1: 'value251', prop2: 'value252', prop3: 'value253', prop4: 'value254', prop5: 'value255'},
			{id: 25, name: "item26", favorite: false, rating: 0, prop1: 'value261', prop2: 'value262', prop3: 'value263', prop4: 'value264', prop5: 'value265'},
			{id: 26, name: "item27", favorite: false, rating: 0, prop1: 'value271', prop2: 'value272', prop3: 'value273', prop4: 'value274', prop5: 'value275'}			
		];		
		for(var i = 0; i < itemsInit.length; i++){
			action = {type: 'add_item',payload: itemsInit[i]};
			store.dispatch(action);
		}
		//letsTest('Test store add_item', /* testId */ '', /* expect */ store.getState(), /* toEqual */ modelApp );
		
		//action = {type: 'toggle_fav',payload: {id: 1, favorite: !store.getState().items[1].favorite}};
		//store.dispatch(action);
		//letsTest('Test store change_item', /* testId */ '', /* expect */ store.getState(), /* toEqual */ modelApp );


	class ItemLibrary extends React.Component {
		
		constructor(props){
			super(props);
			this.state = {};
			//this.state =  store.dispatch(action);
		};		

	/* Renders ************************************
	********************************************** */		
		
		//Rending favorite template
		favoriteRender(prefix, itemId){
			
			if(document.querySelector('#' + prefix + itemId)){
				return ReactDOM.render(
					<ItemFavorite prefix={prefix} itemId={itemId} />,
					document.querySelector('#' + prefix + itemId)
				);
			};
		};

		//Rending star rating template 
		starRatingRender(prefix, itemId){
			//letsTest('ItemLibrary->starRatingRender() [prefix,this.props]', /* testId */ '', /* expect */ [prefix,this.props], /* toEqual */ [] );

			if(document.querySelector('#' + prefix + itemId)){
				return ReactDOM.render(
					<ItemRating prefix={prefix} itemId={itemId} />,
					document.querySelector('#' + prefix + itemId)
				);
			};
		};	

		//Rending ItemPropRow
		itemPropRowRending(itemId){

			let item 	=	store.getState().items[itemId];
			//letsTest('onClickItem(event)', /* testId */ '', /* expect */ [id,item], /* toEqual */ [] );
			
			let arrTemp = [], index = 0;
			for(let propName in item){
				//letsTest('[propName, props[propName]]', /* testId */ '', /* expect */ [propName, item[propName]], /* toEqual */ [] );
				
				if(propName !== 'id' && propName !== 'name' && propName !== 'favorite' & propName != 'rating'){ //propName.match(/prop/gim) !== null

						if(document.querySelector("#ItemPropRow-" + index)){
							// ReactDOM.unmountComponentAtNode(document.querySelector("#ItemPropRow-" + index));
							ReactDOM.render(
								<ItemPropRow itemId={itemId} index={index} propName={propName} item={item} />,
								document.querySelector("#ItemPropRow-" + index)
							);
						};
					index += 1;
				};
			};
		};		
		
		//Rending properties to ItemDetails
		propRending(itemId){
			
			if(document.querySelector("#itemProp")){
				ReactDOM.render(
					<ItemProp itemId={itemId} />,
					document.querySelector("#itemProp")
				);
			};
		};


	/* Handlers ************************************
	********************************************** */
		//Handling onChange favorite star event
		onChangeFavorite = (event) => {
			const itemId	=	event.target.dataset.itemId;
			const checked	=	event.target.checked;
			const prefix	=	event.target.dataset.prefix;
			let action = {type: 'toggle_fav',payload: {id: itemId, favorite: !store.getState().items[itemId].favorite}};
			store.dispatch(action);
			//letsTest('onChangeFavorite(i)', /* testId */ '', /* expect */ [event.target.checked, event.target.dataset.index, store.getState()], /* toEqual */ [] );

			//this.favoriteRender(event.target.dataset.prefix, itemId);
			this.favoriteRender('itemFavorite-', itemId);
			this.favoriteRender('itemFavoriteDetail-', itemId);
			//favoriteRender(prefix, itemId); 

		};

		//Handling onClick rating star event
		onClickStar = (event) => {
			const itemId	=	this.props.itemId;
			const rating	=	event.target.dataset.rating;
			const prefix	=	event.target.dataset.prefix;
			const action = {type: 'change_rating',payload: {id: itemId, rating: rating}};
			store.dispatch(action);
					
			this.starRatingRender('itemRating-', 		itemId);
			this.starRatingRender('itemRatingDetail-', 	itemId);
			//letsTest('ItemLibrary->onClickStar(event)', /* testId */ '', /* expect */ [prefix, itemId, rating, store.getState().items[itemId].rating], /* toEqual */ [] );
		}
		
		//Handling onClick edit props event
		onClickEditProps = (event) => {
			const itemId	=	event.target.dataset.itemId;
			
			const propEdit 	=	document.querySelectorAll('.propEdit');
			const propView 	=	document.querySelectorAll('.propView');
			//letsTest(' ItemLibrary->onClickEditProps()', /* testId */ '', /* expect */ [itemId,propEdit[0].value], /* toEqual */ [] );
			
			
			for(let i = 0; i < propEdit.length; i++){
					
				let propName	=	this.props.propName;
				let valueNew	=	store.getState().items[itemId][propName];
				this.setState({value: valueNew});
				//letsTest(' ItemLibrary->onClickEditProps()', /* testId */ '', /* expect */ this.state, /* toEqual */ [] );

				propEdit[i].classList.remove('d-n');
				propEdit[i].classList.add('d-i-b');
				propEdit[i].parentElement.classList.remove('br-b-s-g');
				
				propView[i].classList.remove('d-i-b');
				propView[i].classList.add('d-n');
			};			
			
			document.querySelector('#editProps').classList.remove('d-i-b');
			document.querySelector('#editProps').classList.add('d-n');

			document.querySelector('#saveProps').classList.remove('d-n');
			document.querySelector('#saveProps').classList.add('d-i-b');

			
		};	
		
		//Handling onClick save props event
		onClickSaveProps = (event) => {
			const itemId	=	event.target.dataset.itemId;
			const propEdit 	=	document.querySelectorAll('.propEdit');
			const propView 	=	document.querySelectorAll('.propView');
			//letsTest(' ItemLibrary->onClickSaveProps()', /* testId */ '', /* expect */ propEdit, /* toEqual */ [] );

			let action = {type: 'change_item',
				payload: {id: itemId, }};			
			for(let i = 0; i < propEdit.length; i++){
				//letsTest(' ItemLibrary->onClickSaveProps()', /* testId */ '', /* expect */ propEdit[i].value, /* toEqual */ [] );
				propEdit[i].classList.remove('d-i-b');
				propEdit[i].classList.add('d-n');
				propEdit[i].parentElement.classList.add('br-b-s-g');
				
				propView[i].classList.remove('d-n');
				propView[i].classList.add('d-i-b');
				propView[i].innerHTML = propEdit[i].value;

				action.payload['prop' + (i + 1)] = propEdit[i].value;
				
			}
			store.dispatch(action);

			let that = this;
			setTimeout(function(){
				document.querySelector('#loadingSection').classList.remove('d-n');
				document.querySelectorAll('body')[0].classList.add('o-0p5');
				
				setTimeout(function(){	
					document.querySelector('#loadingSection').classList.add('d-n');
					document.querySelectorAll('body')[0].classList.remove('o-0p5');
					that.modalWindowOkOpen(event);
				}, 2500);
			}, 0);

			//letsTest('ItemLibrary->onClickSaveProps()', /* testId */ '', /* expect */ [itemId, store.getState().items,action], /* toEqual */ [] );						
		};				
		
		//Handling onClick go back from props page	
		onClickBackProps = (event) => {
			const itemId	=	this.props.itemId;
			//letsTest('ItemLibrary->onClickBackProps()', /* testId */ '', /* expect */ [itemId], /* toEqual */ [] );
			

			ReactDOM.unmountComponentAtNode(document.querySelector("#itemDetails"));

			document.querySelector("#itemDetailsSection").classList.remove('d-b');
			document.querySelector("#itemDetailsSection").classList.add('d-n');

			document.querySelector("#listSection").classList.remove('d-n');
			document.querySelector("#listSection").classList.add('d-b');

		};	

		//onClick new Item Details rendering
		onClickItemRow(event){
			
			const itemId	=	event.target.dataset.itemId;
			//letsTest('ItemRow->onClickItem(event) itemId', /* testId */ '', /* expect */ itemId, /* toEqual */ [] );
			
			document.querySelector("#itemDetailsSection").classList.remove('d-n');
			document.querySelector("#itemDetailsSection").classList.add('d-b');

			document.querySelector("#listSection").classList.remove('d-b');
			document.querySelector("#listSection").classList.add('d-n');
		
			ReactDOM.unmountComponentAtNode(document.querySelector("#itemDetails"));
			if(document.querySelector("#itemDetails")){
				ReactDOM.render(
					<ItemDetails itemId={itemId}  />,
					document.querySelector("#itemDetails")
				);
			};
		};		
		
		//onClick modal window with msg opened
		modalWindowOkOpen(event){

		
			let msg = {};
				msg.header 	=	'Success';
				msg.body	=	'Ok';
				msg.footer	=	'';
		
			if(document.querySelector("#modalSection")){
				// ReactDOM.unmountComponentAtNode(document.querySelector("#ItemPropRow-" + index));
				ReactDOM.render(
					<ModalWindowOk msg={msg} />,
					document.querySelector("#modalSection")
				);
			};
		};

		//onClick modal window with msg closed
		modalWindowOkClose(event){
			
			if(document.querySelector("#modalSection")){
				ReactDOM.unmountComponentAtNode(document.querySelector("#modalSection"));
			};

			document.querySelector('#editProps').classList.remove('d-n');
			document.querySelector('#editProps').classList.add('d-i-b');

			document.querySelector('#saveProps').classList.remove('d-i-b');
			document.querySelector('#saveProps').classList.add('d-n');			
			
		};

		//onClick filtering list of items | List component 
		onClickVisFilter(event){
			//event.preventDefault();
			let action = {type: 'set_visibility_filter',payload: {name: event.target.dataset.filterName, on: true}};
			store.dispatch(action);		

		};
	
		//onClick change range of visible pages of items | List component
		onClickVisRange = (event) => {
			//console.info(' helperFunction():',this.helperFunction());
			let rangeStart		=	store.getState().visibilityRange.start;
			let rangeFinish		=	store.getState().visibilityRange.finish;
			let rangeNewStart 	=	0, rangeNewFinish = 9;
			let lengthTotal		=	store.getState().items.length;
			if(event.target.dataset.course === 'minus'){
				if(		rangeStart - 10		< 10){
						rangeNewStart 		= 0;
						document.querySelector('#buttonPrev').classList.add('disabled');
						
				}
				else{
						rangeNewStart 		= rangeStart - 10;
						document.querySelector('#buttonPrev').classList.remove('disabled');
					
				};
				
				if(		rangeFinish - 10	< 9){
						rangeNewFinish 		= 9;
					
				}
				else{
						rangeNewFinish 		= rangeFinish - 10;
						document.querySelector('#buttonNext').classList.remove('disabled');
				};

			}
			else if(event.target.dataset.course === 'plus'){
				
				if(		rangeStart + 10 	> lengthTotal - 1){ 
						rangeNewStart 		= rangeStart;
				}
				else{ 
						rangeNewStart 		= rangeStart + 10;
						document.querySelector('#buttonPrev').classList.remove('disabled');
						//document.querySelector('#buttonNext').classList.add('')
				};
				
				if(		rangeFinish + 10 	> lengthTotal - 1){ 
						rangeNewFinish 		= lengthTotal;
						document.querySelector('#buttonNext').classList.add('disabled');
				}
				else{
						rangeNewFinish 		= rangeFinish + 10;				
				};
			};
			//letsTest('ItemLibrary->onClickVisRange()', /* testId */ '', /* expect */ [rangeStart, rangeFinish, rangeNewStart,rangeNewFinish], /* toEqual */ []);
			
			let action = {type: 'set_visibility_range',payload: {start: rangeNewStart, finish: rangeNewFinish}};
			store.dispatch(action);
		};
	};		

	
	class ModalWindowOk extends ItemLibrary{
		
		constructor(props: Props){
			super(props);
			this.state	=	{};
			this.state	=	this.props;
		};		
		
		render(){
			//letsTest('ModalWindowOk->render()', /* testId */ '', /* expect */ this.props.msg, /* toEqual */ [] );
			
			return(
				<div className="modal fade in d-b" id="modalOk" role="dialog">
					<div className="modal-sm modal-dialog">


						<div className="modal-content">
							<div className="modal-header text-center">
								<button type="button" className="close" data-dismiss="modal">&times;</button>
								<h4 className="modal-title">{this.props.msg.header}</h4>
							</div>
							<div className="modal-body text-center">
								<button type="button" className="btn btn-default" data-dismiss="modal"
									onClick={this.modalWindowOkClose}>
									{this.props.msg.body}</button>
							</div>
							<div className="modal-footer">
								
							</div>
						</div>

					</div>
				</div>
			);
		};
	};
	
	
	class ItemPropRow extends ItemLibrary{
		
		constructor(props: Props){
			super(props);
			this.state	=	{};
			this.state	=	this.props;
			//this.state.value = this.props.item[this.props.propName];
			//letsTest('ItemPropRow->constructor(props)', /* testId */ '', /* expect */ this.props, /* toEqual */ [] );
		};		

		inputRender = () => {
			//letsTest('ItemLibrary->inputRender()', /* testId */ '', /* expect */ this.props, /* toEqual */ [] );
			
			function rand1000(){
				return Math.floor(1 + Math.random() * 1000);
			}
			
			return(
				<input key={this.props.itemId} id={'inpRender-' + rand1000()} className={'form-control propEdit d-n'} type="text" 
					onChange={(event)=>{}}
					defaultValue={this.props.item[this.props.propName]} />
			);
		};		
		
		
		componentWillReceiveProps(nextProps) {
			/* Does not work
			for(let prop in nextProps){
				if(this.state[prop]){
					this.setState({prop: nextProps[prop]},this.inputRender);
				};
			};
			*/
			
			//this.inputRender();
			//letsTest('ItemPropRow->componentWillReceiveProps()', /* testId */ '1', /* expect */ [this.props,nextProps,this.state], /* toEqual */ [] );
		};
		
		componentDidUpdate(prevProps, prevState){
			//this.setState({item: this.props.item});
			//letsTest('ItemPropRow->componentDidUpdate()', /* testId */ '1', /* expect */ [prevProps, prevState,store.getState(),this.props,this.state], /* toEqual */ [] );
			

			
			
			
			//letsTest('ItemPropRow->componentDidUpdate()', /* testId */ '1', /* expect */ [itemId,propName,valueNew], /* toEqual */ [] );
			//this.setState({value: store.getState().items[this.props.itemId]});
			
			
			// this.props.item[this.props.propName]
			//this.inputRender();
		};
			
			

		
		render(){
			
			return (
				<div className="row l-h-2-em">
					<div className="br-b-s-g col-lg-6 col-md-6 col-sm-6 col-xs-0">
						{this.props.propName}
					</div>
					<div className="br-b-s-g col-lg-6 col-md-6 col-sm-6 col-xs-0">
						<div className={'propView d-i-b'}>
							{this.props.item[this.props.propName]}
						</div>
						{this.inputRender()}
					</div>						
				</div>
			);		
		};
	};
	

	class ItemProp extends ItemLibrary {

		componentWillReceiveProps() {
			//this.setState({value: this.props.item[this.props.key]});
		}		

		componentDidUpdate(){
			//letsTest('ItemRating->componentDidUpdate() this.props.itemId', /* testId */ '', /* expect */ [this.props.prefix, this.props.itemId], /* toEqual */ [] );
			this.itemPropRowRending(this.props.itemId);
		
		}

		componentDidMount(){
			this.itemPropRowRending(this.props.itemId);
		}
		
		render(){
			let item 	=	store.getState().items[this.props.itemId];
			//letsTest('onClickItem(event)', /* testId */ '', /* expect */ [id,item], /* toEqual */ [] );
			
			let arrTemp = [], index = 0;
			for(let key in item){
				//letsTest('[key, props[key]]', /* testId */ '', /* expect */ [key, item[key]], /* toEqual */ [] );
				
				if(key !== 'id' && key !== 'name' && key !== 'favorite' & key != 'rating'){ //key.match(/prop/gim) !== null
					arrTemp[index] = (
						<div key={index} id={'ItemPropRow-' + index}></div>
					);
					index += 1;
				}
				
			};
			
			
			return (<div className="container-fluid">
					<form>
						{arrTemp}
					</form>
				</div>
			);			
			
			
			
		};
	};
		
		
	//Class for  <!-- Sections for item rating star snippet -->
	class ItemRating extends ItemLibrary {	
		constructor(props){
			super(props);
			//this.onClickStar	=	this.onClickStar.bind(this);
			//this.state	= this.props.store;		
		};

		starRender(){
			//letsTest('ItemRating->starRender():', /* testId */ '', /* expect */ [this.props.itemId,this.props.prefix], /* toEqual */ [] );
			const starArr = [0,1,2,3,4];
			
			let compositeClassName;
			return starArr.map((item, i, arr) => {
				if(store.getState().items[this.props.itemId].rating >= i){
					compositeClassName = ["cursorPointer","fa", "fa-star"].join(' ');
					return(
						<span key={i} className={compositeClassName} onClick={this.onClickStar}
							data-rating={i} 
							data-prefix={this.props.prefix}></span>
					);
				}
				else{
					compositeClassName = ["cursorPointer","fa", "fa-star-o"].join(' ');
					return(
						<span key={i} className={compositeClassName} onClick={this.onClickStar} 
							data-rating={i}
							data-prefix={this.props.prefix}></span>
					);
				};
			});	
		};
		
		componentWillReceiveProps(){
			//letsTest('ItemRating->componentWillReceiveProps() this.props.itemId', /* testId */ '', /* expect */ this.props.itemId, /* toEqual */ [] );
		}
		
		
		componentDidUpdate(){
			//letsTest('ItemRating->componentDidUpdate() this.props.itemId', /* testId */ '', /* expect */ [this.props.prefix, this.props.itemId], /* toEqual */ [] );
		}
		
		render(){
			
			let item 	=	store.getState().items[this.props.itemId];
			
			return(
				<span className="rating">
					{this.starRender()}
					<span className="p-l-1-em">{/* item.rating */}</span>
				</span>
			);
		};
	};


	class ItemFavorite extends ItemLibrary {

		constructor(props){
			super(props);
		};
	
		render(){
			
			let item 	=	store.getState().items[this.props.itemId];
			let prefix	=	this.props.prefix;
			//letsTest('ItemFavorite->render()', /* testId */ '', /* expect */ [prefix + item.id,item.favorite], /* toEqual */ [] );
			
			// let list = this.listGenerate().toString();
			let checked = (item.favorite === true ? 'checked' : '');
						
			
			return 	(<form>
						<label className="checkbox-inline">
							<input id={prefix + 'input-' + item.id} type="checkbox" className="pos-r"
								data-item-id={item.id}
								data-prefix={prefix + item.id}
								onChange={this.onChangeFavorite} checked={checked} />
								{/* item.favorite.toString() */}
						</label>
					</form>);		
		};
	};	
	

	//Class for <!-- Sections for item details -->
	class ItemDetails extends ItemLibrary {

		constructor(props){
			super(props);
			//this.state			=	{};
			//this.state.store	=	store.getState(); //this.props.store;
			//letsTest('ItemDetails->constructor(props) this.props.itemId', /* testId */ '', /* expect */ this.props.itemId, /* toEqual */ [] );
		};
	
		clickHandler(){

		};

		componentDidMount(){
			//letsTest('ItemDetails->componentDidMount() this.props.itemId', /* testId */ '', /* expect */ this.props.itemId, /* toEqual */ [] );
			this.favoriteRender		('itemFavoriteDetail-', 	this.props.itemId);
			this.starRatingRender	('itemRatingDetail-', 		this.props.itemId);
			this.propRending(this.props.itemId);
		};
	
		componentWillReceiveProps(){
			//letsTest('ItemDetails->componentWillReceiveProps() this.props.itemId', /* testId */ '', /* expect */ this.props.itemId, /* toEqual */ [] );
		}
		
		componentDidUpdate(prevProps, prevState){
			this.favoriteRender		('itemFavoriteDetail-', 	this.props.itemId);
			this.starRatingRender	('itemRatingDetail-', 		this.props.itemId);
			this.propRending(this.props.itemId);
		}
		
		render(){

			let item 	=	store.getState().items[this.props.itemId];
			//letsTest('ItemDetails->render()', /* testId */ '', /* expect */ [item.id,item.favorite], /* toEqual */ [] );
			
			// let list = this.listGenerate().toString();
			let checked = (item.favorite === true ? 'checked' : '');
			
			return(
				<div className="container-fluid">				
					<div className="row">
						<div className="h3 p-l-1-em col-lg-12 col-md-12 col-sm-12 col-xs-0">
							{item.name} 
						</div>
					</div>	
					<div className="row f-s-1p2-em">						
						<div className="h4 p-l-1p5-em col-lg-6 col-md-6 col-sm-6 col-xs-0">
							<span className="">Favorite</span>
						</div>
						<div id={'itemFavoriteDetail-'+ item.id} className="col-lg-6 col-md-6 col-sm-6 col-xs-0">
						</div>						
					</div>	
					<div className="row f-s-1p2-em">						
						<div className="h4 p-l-1p5-em col-lg-6 col-md-6 col-sm-6 col-xs-0">
							<span className="">Rating</span>
						</div>
						<div className="h4 col-lg-6 col-md-6 col-sm-6 col-xs-0">
							<div id={"itemRatingDetail-" + this.props.itemId}></div>
						</div>						
					</div>	
					<div className="row f-s-1p2-em p-t-1-em">
						<div id="itemProp" className="col-lg-12 col-md-12 col-sm-12 col-xs-0">
						</div>						
					</div>
					<div className="row p-t-1-em p-l-1-em p-t-2-em f-s-1p2-em">
						<div className="col-lg-4 col-md-4 col-sm-4 col-xs-0">
							<buttom id="editProps" type="button" className="btn btn-warning w-100 d-i-b" 
								data-item-id={item.id}
								onClick={this.onClickEditProps}>Edit</buttom>
							<buttom id="saveProps" type="button" className="btn btn-danger w-100 d-n"
								data-item-id={item.id} 
								onClick={this.onClickSaveProps}>Save</buttom>	
						</div>
						<div className="col-lg-4 col-md-4 col-sm-4 col-xs-0">
						</div>
						<div className="col-lg-4 col-md-4 col-sm-4 col-xs-0">
						</div>						
					</div>
					<div className="row p-t-1-em p-l-1-em p-t-2-em f-s-1p2-em">
						<div className="col-lg-8 col-md-8 col-sm-8 col-xs-0">
							<buttom type="button" className="btn btn-success w-100"
								data-item-id={item.id}
								onClick={this.onClickBackProps}
								data-toggle="modal" data-target="#modalOk">Go back to list</buttom>	
						</div>
						<div className="col-lg-4 col-md-4 col-sm-4 col-xs-0">

						</div>					
					</div>						
				</div>
			);
			
		}
	};

	
	//Class for one item row with item-->
	class ItemRow extends ItemLibrary {
		constructor(props){
			super(props);
			//this.state	= this.props.store;	
			//this.onChangeFavorite.bind(this);
			//this.onClickItem.bind(this);			
		};
				
		componentDidMount(){
			this.favoriteRender		('itemFavorite-',	this.props.itemId);
			this.starRatingRender	('itemRating-',		this.props.itemId);
			//letsTest('store', /* testId */ '', /* expect */ this.itemListArray(), /* toEqual */ [] );
		};
	
		componentDidUpdate(prevProps, prevState){
			//letsTest('componentDidUpdate ItemRow', /* testId */ '', /* expect */ this.props.itemId, /* toEqual */ [] );
		}

		
		render(){
			let id		=	this.props.itemId;
			let item	=	store.getState().items[id];
			let checked = (item.favorite === true ? 'checked' : '');
			
			return (<div key={id} className="row f-s-1p2-em br-b-s-g">
						<div className="col-lg-4 col-md-4 col-sm-4 col-xs-0">
							<a	href="#" onClick={this.onClickItemRow} 
								data-item-id={this.props.itemId} >{item.name}</a>
						</div>
						<div id={'itemFavorite-' + this.props.itemId} className="col-lg-4 col-md-4 col-sm-4 col-xs-0">
						</div>
						<div className="col-lg-4 col-md-4 col-sm-4 col-xs-0">
							<div id={"itemRating-" + this.props.itemId}></div>
						</div>						
					</div>);
		};
	};
	
	
	//Class for <!-- Sections for section of the List page - item list -->
	class ItemList extends ItemLibrary {
		constructor(props){
			super(props);
			this.state			=	{};
			this.state.store	=	store.getState();
			
		};


		//List generation call back
		itemCallBack(item, i, arr){
			//letsTest('visibleItems itemCallBack', /* testId */ '', /* expect */ [item, i, arr], /* toEqual */ [] );
			
			return	ReactDOM.render(
						<ItemRow itemId={item.id} />,
						document.querySelector("#item-" + item.id)
					);
		};
		
		itemListContainer(){
			return this.props.visibleItems.map((item, i, arr) => {
				//letsTest('visibleItems', /* testId */ '', /* expect */ [item, i, arr], /* toEqual */ [] );
				return (<div id={"item-" + item.id} key={item.id}></div>);
			});
		};
				
		itemListArray(callMethod){
			//console.info(' list:',this.visibleItems().map((item, i, arr) => this.itemCallBack(item, i, arr)));
			//letsTest('itemListArray', /* testId */ '', /* expect */ [callMethod,this.visibleItems(), store.getState().visibilityFilter.name,store.getState()], /* toEqual */ [] );
				
			return this.props.visibleItems.map((item, i, arr) => this.itemCallBack(item, i, arr));
			//let list = store.getState().items.map((item, i, arr) => this.itemCallBack(item, i, arr));
		};	
	
		componentDidMount(){
			this.itemListArray('componentDidMount');
			//letsTest('store', /* testId */ '', /* expect */ this.itemListArray(), /* toEqual */ [] );
		};
	
		componentDidUpdate(prevProps, prevState){
			this.itemListContainer();
			this.itemListArray('componentDidUpdate');
			//console.info(' this.state.store():',this.state.store);
			//letsTest('this.state.store', /* testId */ '', /* expect */ store.getState(), /* toEqual */ [] );			
		}
	
		render(){
			return (<div>{this.itemListContainer()}</div>);
		};
	};
	
	
	//Class for <!-- Sections for page list -->
	class List extends ItemLibrary {

		constructor(props){
			super(props);
			this.state			=	{};
			this.state.store	=	store.getState();
			this.visibleItems();
			//this.visibleItems.bind(this);
			//this.visibilityRange.bind(this);
		};
		
		itemListRender(){
			ReactDOM.render(
				<ItemList store={store.getState()} visibleItems={this.visibleItems()} />,
				document.querySelector("#itemList")
			);
		};
			
		componentDidMount(){
			this.itemListRender();
			//letsTest('this.listGenerate()', /* testId */ '', /* expect */ [document.querySelector("#itemList"),store.getState()], /* toEqual */ [] );		
		};
		
		componentDidUpdate(){
			this.itemListRender();
			//letsTest('this.itemListRender()', /* testId */ '', /* expect */ this.itemListRender(), /* toEqual */ []);
		}

		visibleItems(){
			let visibleItems01 = store.getState().items.slice().filter((item, i, arr) => {			
					let filter = false;
					if(	store.getState().visibilityFilter.name === 'all'){
						//letsTest('visibleItems', /* testId */ '', /* expect */ store.getState().visibilityFilter.name, /* toEqual */ [] );
						filter = true;
					}
					else if(store.getState().visibilityFilter.name === 'favorite' && item.favorite === true){
						filter = true ;
					}
					return filter;
				});

			let	visibleItems02 = visibleItems01.filter((item, i, arr) => {			
					let range 			=	false;
					let rangeStart		=	store.getState().visibilityRange.start;
					let rangeFinish 	=	store.getState().visibilityRange.finish;
					let lengthTotal		=	store.getState().items.length;
					let lengthFilter	=	visibleItems01.length;
					
					((i < rangeStart || i > rangeFinish) &&  lengthFilter > 10	? 	range = false : range = true);
					
					//letsTest('filter Range', /* testId */ '', /* expect */ [rangeStart, rangeFinish, i, range], /* toEqual */ []);
					
					return range;
				});

			//letsTest('filter Range', /* testId */ '3', /* expect */ store.getState().visibilityRange, /* toEqual */ []);	
			return visibleItems02;
		}		

		render(){
			
			
			//letsTest('List->render()', /* testId */ '', /* expect */ store.getState().items.length, /* toEqual */ [] );
			let disabled;
			(store.getState().items.length <11 ? disabled = 'disabled' : '');
			let nextCssClass = 'btn btn-default h4 w-100 ' + disabled;
			
			
			//let list = this.listGenerate().toString();
			//letsTest('this.listGenerate()', /* testId */ '', /* expect */ list, /* toEqual */ [] );
			
			return(
				<div className="container-fluid">
					<div className="row">
						<div className="h3 col-lg-4 col-md-4 col-sm-4 col-xs-0">
							List
						</div>
						<div className="col-lg-4 col-md-4 col-sm-4 col-xs-0">
							<buttom type="button" className="m-t-1-em w-100 btn btn-info" onClick={this.onClickVisFilter} data-filter-name="favorite">Favorite</buttom>
						</div>						
						<div className="col-lg-4 col-md-4 col-sm-4 col-xs-0">
							<buttom type="button" className="m-t-1-em w-100 btn btn-info" onClick={this.onClickVisFilter} data-filter-name="all">All</buttom>
						</div>
					</div>				
					<div className="row">
						<div className="h4 col-lg-4 col-md-4 col-sm-4 col-xs-0">
							<b>Name</b>
						</div>
						<div className="h4 col-lg-4 col-md-4 col-sm-4 col-xs-0">
							<b>Favorite</b>
						</div>
						<div className="h4 col-lg-4 col-md-4 col-sm-4 col-xs-0">
							<b>Rating</b>
						</div>						
					</div>

					<div id="itemList"></div>
					
					<div className="row">
						<div className="col-lg-4 col-md-4 col-sm-4 col-xs-0">
						</div>
						<div className="col-lg-4 col-md-4 col-sm-4 col-xs-0">
							<button id="buttonPrev" type="button" className="btn btn-default h4 w-100 disabled"
							onClick={this.onClickVisRange} data-course="minus">Previous</button>
						</div>
						<div className="col-lg-4 col-md-4 col-sm-4 col-xs-0">
							<button id="buttonNext" type="button" className={nextCssClass} 
							onClick={this.onClickVisRange} data-course="plus">Next</button>
						</div>						
					</div>					
				</div>
			);
			
		}
	};	
	

	//Block about subscription
	const render	=	() => {
		if(document.querySelector("#list")){
			ReactDOM.render(
				<List store={store.getState()} />,
				document.querySelector("#list")
			);
		};		
	};
	store.subscribe(render);
	render();

	
})();

	


