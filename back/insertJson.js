const mysqlConnection = require('./mysql');
const fs = require('fs');

const connection = mysqlConnection.init();
mysqlConnection.open(connection);

const insertDataFromJson = () => {
    fs.readFile('./data.json', 'utf8', (err, data) => {
        if (err) {
            console.log('JSON 파일 읽기 실패:', err);
            return;
        }

        try {
            const jsonData = JSON.parse(data);
            const insertQueries = [];

            for (const item of jsonData) {
                const { team_1, team_1_score, team_2, team_2_score, matched_at, match_is } = item;
            
                const query = `INSERT INTO test2 (team_1, team_1_score, team_2, team_2_score, matched_at, match_is) VALUES (${team_1}, ${team_1_score}, ${team_2}, ${team_2_score}, '${matched_at}', '${match_is}')`;
            
                connection.query(query, (err, results) => {
                    if (err) {
                        console.log('데이터베이스 쿼리 실행 실패:', err);
                    } else {
                        console.log('데이터베이스에 데이터 입력 완료');
                    }
                });
            }
            const queryString = insertQueries.join(';');

            connection.query(queryString, (err, results) => {
                if (err) {
                    console.log('데이터베이스 쿼리 실행 실패:', err);
                } else {
                    console.log('데이터베이스에 데이터 입력 완료');
                }

                // 데이터베이스 연결 종료
                connection.end();
            });
        } catch (err) {
            console.log('JSON 파일 파싱 실패:', err);
        }
    });
};

// JSON 파일로부터 데이터를 데이터베이스에 입력
insertDataFromJson();