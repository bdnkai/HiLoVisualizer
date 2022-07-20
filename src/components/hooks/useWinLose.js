import { useState, useEffect, useContext } from 'react';
import { gameContext } from '../context/gameContext';

import React from 'react';

export function useWinLose() {
	const { bJ, setBJ } = useContext(gameContext);

}
