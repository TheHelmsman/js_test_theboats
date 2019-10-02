import React, { Component, Fragment } from 'react'
import LoginForm from './components/LoginForm'
import CustomMap from './components/CustomMap'
import i18n from './i18n'

import { connect } from 'react-redux'
import { updatePosition } from './actions'
import PropTypes from 'prop-types'

const mapDispatchToProps = dispatch => {
	return {
		updatePosition: position => dispatch(updatePosition(position)),
	}
}

const mapStateToProps = store => {
	return {
		lat: store.map.lat,
		lng: store.map.lng,
		markers: store.map.markers,
	}
}

class myApp extends Component {
	getUserLocation = () => {
		var that = this
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				function(position) {
					that.props.updatePosition({
						lat: position.coords.latitude,
						lng: position.coords.longitude,
						markers: [
							{
								key: 'marker1',
								position: [position.coords.latitude, position.coords.longitude],
								children: i18n.t('marker'),
							},
						],
					})
				},
				function() {
					console.log(i18n.t('geoDiscovery'))
				}
			)
		} else {
			console.log(i18n.t('geoSupport'))
		}
	}

	componentDidMount = () => {
		this.getUserLocation()
	}

	render() {
		const { lat, lng, markers } = this.props
		return (
			<div>
				<Fragment>
					<LoginForm />
				</Fragment>
				<CustomMap center={[lat, lng]} markers={markers} />
			</div>
		)
	}
}

myApp.propTypes = {
	lat: PropTypes.number,
	lng: PropTypes.number,
	markers: PropTypes.array,
}

const App = connect(
	mapStateToProps,
	mapDispatchToProps
)(myApp)

export default App
