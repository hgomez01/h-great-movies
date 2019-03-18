const userSeed = [
    {
        "name": "Herberth Administrator",
        "email": "hgomez@admin.com",
        "password" : "$2a$10$1Nl676sQrYhbPwZjswI3p.jEik/n2Pips4aISkU.qM5bo6/IcHoZa", // hashed password for -> 123456789
        "role": "Admin",
        "status": "Enabled",
    },
    {
        "name": "General Administrator",
        "email": "administrator@greatmovies.com",
        "password" : "$2a$10$1Nl676sQrYhbPwZjswI3p.jEik/n2Pips4aISkU.qM5bo6/IcHoZa",
        "role": "Admin",
        "status": "Enabled",
    },
    {
        "name": "General user 01",
        "email": "user01@gmail.com",
        "password" : "$2a$10$1Nl676sQrYhbPwZjswI3p.jEik/n2Pips4aISkU.qM5bo6/IcHoZa",
        "role": "General",
        "status": "Enabled",
    },
    {
        "name": "General user 02",
        "email": "user02@yahoo.com",
        "password" : "$2a$10$1Nl676sQrYhbPwZjswI3p.jEik/n2Pips4aISkU.qM5bo6/IcHoZa",
        "role": "General",
        "status": "Enabled",
    },
    {
        "name": "General user 03",
        "email": "user03@hotmail.com",
        "password" : "$2a$10$1Nl676sQrYhbPwZjswI3p.jEik/n2Pips4aISkU.qM5bo6/IcHoZa",
        "role": "General",
        "status": "Enabled",
    },
    {
        "name": "General user 04",
        "email": "user04@outlook.com",
        "password" : "$2a$10$1Nl676sQrYhbPwZjswI3p.jEik/n2Pips4aISkU.qM5bo6/IcHoZa",
        "role": "General",
        "status": "Enabled",
    }
]

exports.module = userSeed;
