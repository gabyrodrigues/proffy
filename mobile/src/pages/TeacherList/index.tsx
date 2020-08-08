import React, { useState, useEffect } from 'react';

import { ScrollView, Text, TextInput, View } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import styles from './styles';
import api from '../../services/api';

function TeacherList() {
	const [isFiltersVisible, setIsFiltersVisible] = useState(false);

	const [subject, setSubject] = useState('');
	const [week_day, setWeekDay] = useState('');
	const [time, setTime] = useState('');

	const [teachers, setTeachers] = useState([]);

	function handleToggleFiltersVisible() {
		setIsFiltersVisible(!isFiltersVisible);
	}

	async function handleFiltersSubmit() {
		const response = await api.get('/classes', {
			params: {
				subject,
				week_day,
				time
			}
		});
		
		setIsFiltersVisible(false);
		setTeachers(response.data);
	}

	return (
		<View style={styles.container}>
			<PageHeader 
				title="Proffys disponíveis" 
				headerRight={(
					<BorderlessButton onPress={handleToggleFiltersVisible}>
						<Feather 
							name="filter" 
							size={20} 
							color="#fff" 
						/>
					</BorderlessButton>
				)}
			>
				{ isFiltersVisible && (<View style={styles.searchForm}> 
					<Text style={styles.label}>
						Matéria
					</Text>
					<TextInput
						style={styles.input}
						placeholder="Qual é a matéria?"
						placeholderTextColor="#c1bbcc"
						value={subject}
						onChangeText={text => setSubject(text)}
					/>

					<View style={styles.inputGroup}>
						<View style={styles.inputBlock}>
							<Text style={styles.label}>
								Dia da semana
							</Text>
							<TextInput
								style={styles.input}
								placeholder="Qual o dia?"
								placeholderTextColor="#c1bbcc"
								value={week_day}
								onChangeText={text => setWeekDay(text)}
							/>
						</View>

						<View style={styles.inputBlock}>
							<Text style={styles.label}>
								Horário
							</Text>
							<TextInput
								style={styles.input}
								placeholder="Qual o horário?"
								placeholderTextColor="#c1bbcc"
								value={time}
								onChangeText={text => setTime(text)}
							/>
						</View>
					</View>
					<RectButton onPress={handleFiltersSubmit} style={styles.submitButton}>
						<Text style={styles.submitButtonText}>Filtrar</Text>
					</RectButton>
				</View> )}
			</PageHeader>

			<ScrollView
				style={styles.teacherList}
				contentContainerStyle={{
					paddingHorizontal: 16,
					paddingBottom: 16
				}}
			>
				{
					teachers.map((teacher: Teacher) => {
						return (
							<TeacherItem key={teacher.id} teacher={teacher} />
						);
					})
				}
			</ScrollView>
		</View>
	);
}

export default TeacherList;