DROP DATABASE IF EXISTS soccer_db;
CREATE DATABASE soccer_db;

\c soccer_db;

-- teams
CREATE TABLE teams (
    team_id SERIAL PRIMARY KEY,
    team_name VARCHAR(100) UNIQUE NOT NULL
);

-- players
CREATE TABLE players (
    player_id SERIAL PRIMARY KEY,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    team_id INT REFERENCES teams(team_id)
);

-- referees
CREATE TABLE referees (
    referee_id SERIAL PRIMARY KEY,
    first_name VARCHAR(100),
    last_name VARCHAR(100)
);

-- seasons
CREATE TABLE seasons (
    season_id SERIAL PRIMARY KEY,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL
);

-- matches
CREATE TABLE matches (
    match_id SERIAL PRIMARY KEY,
    home_team_id INT REFERENCES teams(team_id),
    away_team_id INT REFERENCES teams(team_id),
    match_date TIMESTAMP,
    season_id INT REFERENCES seasons(season_id)
    referee_id INT REFERENCES referees(referee_id)
);

-- goals
CREATE TABLE goals (
    goal_id SERIAL PRIMARY KEY,
    match_id INT REFERENCES matches(match_id),
    player_id INT REFERENCES players(player_id),
);

-- lineups
CREATE TABLE lineups (
    lineup_id SERIAL PRIMARY KEY,
    match_id INT REFERENCES matches(match_id),
    player_id INT REFERENCES players(player_id),
    team_id INT REFERENCES teams(team_id)
);

-- results
CREATE TABLE results (
    result_id SERIAL PRIMARY KEY,
    match_id INT REFERENCES matches(match_id),
    home_team_goals INT,
    away_team_goals INT,
);