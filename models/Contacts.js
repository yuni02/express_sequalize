const moment = require('moment');

module.exports = (sequelize, DataTypes)=>{
    const Contacts = sequelize.define('Contacts',
        {
            id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
            name : { type: DataTypes.STRING },
            price : { type: DataTypes.INTEGER },
            description: { type: DataTypes.TEXT }
        }
    );


    Contacts.prototype.dateFormat = (date) => (
        moment(date).format('YYYY년 MM월 DD일')
    );

    return Contacts;
}