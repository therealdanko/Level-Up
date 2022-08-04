require 'faker'

User.destroy_all
User.reset_pk_sequence
UserSkill.destroy_all
UserSkill.reset_pk_sequence
Skill.destroy_all
Skill.reset_pk_sequence
LevelUpSkill.destroy_all
LevelUpSkill.reset_pk_sequence


puts "Starting Seeding..."

 skills = ["Knitting", "Painting", "Flyfishing", "Surfing", "Singing", "Chess", "Bike Repair", "German", "Archery", "Skiing", "Snowboarding", "Electrical Repairs", "Plumbing", "Public Speaking", "Driving Manual", "Basketball", "Tennis", "Computer Repair", "Software troubleshooting", "Salsa", "Forro", "Tap dancing", "DND narrating", "Rock Climbing", "Wood Carving", "Drawing", "Piano", "Guitar", "Violin", "Meditation", "Wine Tasting", "Cribbage", "Crafting", "Event Planning", "Research", "Exploring", "Working Out", "Eating", "Interviewing", "Biking", "Camping", "Making an Espresso"]

 skills.each do |skill|
    Skill.create(name: skill)
            end

 skills.each do |skill|
    LevelUpSkill.create(name: skill)   
        end


  
descriptionList = ["Hey, I have been doing this for years! Love to teach others how to do this!", "My parents taught me when I was a child and never stopped! Would love to show people how to!", "Learned more in depth in college and have been teaching people for years!", "I am a prodigy!", "This is all I do!", "I am a master!"]

credentialsList = ["Certificate", "2 year degree", "School of hard knocks", "4 year degree", "Masters", "I am a doctor of this!"]



danko = User.create(
    username: "Danko", 
    password:"Danko1234!", 
    password_confirmation:"Danko1234!", 
    name: "Danko Karleusa",
    email_address: "danko@test.com",
    is_admin: true, 
    profile_image:"https://cdn-images-1.medium.com/max/1000/1*_Y92uzTrvKjaGwDrbxTobg.jpeg",
    )

    leah = User.create(
        username: "Leah", 
        password:"Leah1234!", 
        password_confirmation:"Leah1234!", 
        name: "Leah Chen",
        email_address: "leah@test.com",
        is_admin: true, 
        profile_image:"https://cdn-images-1.medium.com/max/1000/1*0bRteDHUN72U0zMxzHO2Xw.jpeg"
        )

jenna = User.create(
            username: "Jenna", 
            password:"Jenna1234!", 
            password_confirmation:"Jenna1234!", 
            name: "Jenna Hrdlicka",
            email_address: "jenna@test.com",
            is_admin: true, 
            profile_image:"https://cdn-images-1.medium.com/max/1000/1*4dG6L-Fft_i_feKgrdSAlg.png"
            )
    

mai = User.create(
                username: "Mai", 
                password:"Mai1234!", 
                password_confirmation:"Mai1234!", 
                name: "Mai Vang",
                email_address: "mai@test.com",
                is_admin: true, 
                profile_image:"https://cdn-images-1.medium.com/max/1000/1*2xogdgnJEOyb10uYcyH5Cw.jpeg"
                )
   
annemarie = User.create(
                    username: "Annemarie", 
                    password:"Annemarie1234!", 
                    password_confirmation:"Annemarie1234!", 
                    name: "Annemarie Lucernoni",
                    email_address: "annemarie@test.com",
                    is_admin: true, 
                    profile_image:"https://cdn-images-1.medium.com/max/1000/1*B0fReMgAJXD-8QM2dmgckA.jpeg"
                    )
       
eli = User.create(
                        username: "Eli", 
                        password:"Eli1234!", 
                        password_confirmation:"Eli1234!", 
                        name: "Eli Craig",
                        email_address: "eli@test.com",
                        is_admin: true, 
                        profile_image:"https://cdn-images-1.medium.com/max/1000/1*dq6-8NuskBJRFx106L0mNQ.jpeg"
                        )


# test1 = User.create(
#     username: "Test1", 
#     password:"Test1234!", 
#     password_confirmation:"Test1234!", 
#     name: Faker::Name.unique.name,
#     email_address: "test1@test.com",
#     profile_image:Unsplash::Photo.random(query:"person").urls.small)

# test2 = User.create(
#     username: "Test2", 
#     password:"Test1234!", 
#     password_confirmation:"Test1234!", 
#     name: Faker::Name.unique.name,
#     email_address: "test2@test.com",
#     profile_image:Unsplash::Photo.random(query:"person").urls.small)


# test3 = User.create(
#     username: "Test3", 
#     password:"Test1234!", 
#     password_confirmation:"Test1234!", 
#     name: Faker::Name.unique.name,
#     email_address: "test3@test.com",
#     profile_image:Unsplash::Photo.random(query:"person").urls.small)


# test4 = User.create(
#     username: "Test4", 
#     password:"Test1234!", 
#     password_confirmation:"Test1234!", 
#     name: Faker::Name.unique.name,
#     email_address: "test4@test.com",
#     profile_image:Unsplash::Photo.random(query:"person").urls.small)


# test5 = User.create(
#     username: "Test5", 
#     password:"Test1234!", 
#     password_confirmation:"Test1234!", 
#     name: Faker::Name.unique.name,
#     email_address: "test5@test.com",
#     profile_image:Unsplash::Photo.random(query:"person").urls.small)


# test6 = User.create(
#     username: "Test6", 
#     password:"Test1234!", 
#     password_confirmation:"Test1234!", 
#     name: Faker::Name.unique.name,
#     email_address: "test6@test.com",
#     profile_image:Unsplash::Photo.random(query:"person").urls.small)


# test7 = User.create(
#     username: "Test7", 
#     password:"Test1234!", 
#     password_confirmation:"Test1234!", 
#     name: Faker::Name.unique.name,
#     email_address: "test7@test.com",
#     profile_image:Unsplash::Photo.random(query:"person").urls.small)
  

# test8 = User.create(
#     username: "Test8", 
#     password:"Test1234!", 
#     password_confirmation:"Test1234!", 
#     name: Faker::Name.unique.name,
#     email_address: "test8@test.com",
#     profile_image:Unsplash::Photo.random(query:"person").urls.small)
       

# test9 = User.create(
#     username: "Test9", 
#     password:"Test1234!", 
#     password_confirmation:"Test1234!", 
#     name: Faker::Name.unique.name,
#     email_address: "test9@test.com",
#     profile_image:Unsplash::Photo.random(query:"person").urls.small)
        

# test10 = User.create(
#     username: "Test10", 
#     password:"Test1234!", 
#     password_confirmation:"Test1234!", 
#     name: Faker::Name.unique.name,
#     email_address: "test10@test.com",
#     profile_image:Unsplash::Photo.random(query:"person").urls.small)
              
# test11 = User.create(
#     username: "Test11", 
#     password:"Test1234!", 
#     password_confirmation:"Test1234!", 
#     name: Faker::Name.unique.name,
#     email_address: "test11@test.com",
#     profile_image:Unsplash::Photo.random(query:"person").urls.small)
              
# test12 = User.create(
#     username: "Test12", 
#     password:"Test1234!", 
#     password_confirmation:"Test1234!", 
#     name: Faker::Name.unique.name,
#     email_address: "test12@test.com",
#     profile_image:Unsplash::Photo.random(query:"person").urls.small)
              
# test13 = User.create(
#     username: "Test13", 
#     password:"Test1234!", 
#     password_confirmation:"Test1234!", 
#     name: Faker::Name.unique.name,
#     email_address: "test13@test.com",
#     profile_image:Unsplash::Photo.random(query:"person").urls.small)
              
# test14 = User.create(
#     username: "Test14", 
#     password:"Test1234!", 
#     password_confirmation:"Test1234!", 
#     name: Faker::Name.unique.name,
#     email_address: "test14@test.com",
#     profile_image:Unsplash::Photo.random(query:"person").urls.small)
              
# test15 = User.create(
#     username: "Test15", 
#     password:"Test1234!", 
#     password_confirmation:"Test1234!", 
#     name: Faker::Name.unique.name,
#     email_address: "test15@test.com",
#     profile_image:Unsplash::Photo.random(query:"person").urls.small)
              
# test16 = User.create(
#     username: "Test16", 
#     password:"Test1234!", 
#     password_confirmation:"Test1234!", 
#     name: Faker::Name.unique.name,
#     email_address: "test16@test.com",
#     profile_image:Unsplash::Photo.random(query:"person").urls.small)
 
    
# test17 = User.create(
#     username: "Test17", 
#     password:"Test1234!", 
#     password_confirmation:"Test1234!", 
#     name: Faker::Name.unique.name,
#     email_address: "test17@test.com",
#     profile_image:Unsplash::Photo.random(query:"person").urls.small)
                  
# test18 = User.create(
#     username: "Test18", 
#     password:"Test1234!", 
#     password_confirmation:"Test1234!", 
#     name: Faker::Name.unique.name,
#     email_address: "test18@test.com",
#     profile_image:Unsplash::Photo.random(query:"person").urls.small)
                  
# test19 = User.create(
#     username: "Test19", 
#     password:"Test1234!", 
#     password_confirmation:"Test1234!", 
#     name: Faker::Name.unique.name,
#     email_address: "test19@test.com",
#     profile_image:Unsplash::Photo.random(query:"person").urls.small)
                  
# test20 = User.create(
#     username: "Test20", 
#     password:"Test1234!", 
#     password_confirmation:"Test1234!", 
#     name: Faker::Name.unique.name,
#     email_address: "test20@test.com",
#     profile_image:Unsplash::Photo.random(query:"person").urls.small)
                  
# test21 = User.create(
#     username: "Test21", 
#     password:"Test1234!", 
#     password_confirmation:"Test1234!", 
#     name: Faker::Name.unique.name,
#     email_address: "test21@test.com",
#     profile_image:Unsplash::Photo.random(query:"person").urls.small)
                  
# test22 = User.create(
#     username: "Test22", 
#     password:"Test1234!", 
#     password_confirmation:"Test1234!", 
#     name: Faker::Name.unique.name,
#     email_address: "test22@test.com",
#     profile_image:Unsplash::Photo.random(query:"person").urls.small)   


    # 20.times do
#     User.create(
#         username: Faker::FunnyName.unique, 
#                     password:"Test1234!", 
#                     password_confirmation:"Test1234!", 
#                     name: Faker::Name.unique.name,
#                     email_address: "test@test.com",
#                     profile_image:Unsplash::Photo.random(query:"person").urls.small)
    

#     randomUsers.push(:user)

# end
            
UserSkill.create(user_id: 1, skill_id: Skill.ids[10], description: "I have been snowboarding since I was 13. I can teach you all the basics, and even some terrian park stunts!", credentials: "My snowboard")

UserSkill.create(user_id: 1, skill_id: Skill.ids[14], description: "I learned from my grandpa in Europe who is a mechanic, plus I drove for five years here in the US with still. Love manual and I think it is something everyone should learn!", credentials: "I can shift like a pro.")

UserSkill.create(user_id: 1, skill_id: Skill.ids[5], description: "I learned from my grandpa when I was 4 years old and have been playing regularly since. I know a bunch of great starting moves general strategies, and individual piece descriptions", credentials: "My record is on average 2-1.")


UserSkill.create(user_id: 2, skill_id: Skill.ids[34], description: "There is no information I cannot find.", credentials: "Look at description...")

UserSkill.create(user_id: 2, skill_id: Skill.ids[33], description: "I have planned all my friends weddings!", credentials:"75 weddings and counting!")

UserSkill.create(user_id: 2, skill_id: Skill.ids[32], description: "Queen of Crafts.", credentials: "My thrown made of crafts!")

UserSkill.create(user_id: 3, skill_id: Skill.ids[30], description: "I can astral project when meditating.", credentials: "You can feel it, can't you?")

UserSkill.create(user_id: 3, skill_id: Skill.ids[31], description: "My palette is on another level!", credentials:"I have done this professional and I practice daily :P!")

UserSkill.create(user_id: 3, skill_id: Skill.ids[32], description: "None of my friends will play will me anymore, cuz they never win!", credentials: "I am a tri-state champ!")

UserSkill.create(user_id: 4, skill_id: Skill.ids[35], description: "I have an uncanny skill of exploration, I always find the most interesting things anywhere I go.", credentials: "I can name every hot spot in LA.")

UserSkill.create(user_id: 4, skill_id: Skill.ids[36], description: "I have tried out 37 different workout routines.", credentials:"Look at my photo... I mean, come on!")

UserSkill.create(user_id: 4, skill_id: Skill.ids[37], description: "I am like those eating contest champs, I may not look like it, but I CAN EAT!", credentials: "I have won the LA Taco eating contest 3 years in a row")

UserSkill.create(user_id: 5, skill_id: Skill.ids[38], description: "I know how to ask the right questions.", credentials: "Check out my Linkedin")

UserSkill.create(user_id: 5, skill_id: Skill.ids[39], description: "I know all there is to know about biking.", credentials:"I have biked from LA to New York, and back!")

UserSkill.create(user_id: 5, skill_id: Skill.ids[40], description: "Camping is sceond nature for me.", credentials: "I have survived two weeks in the wilderness with nothing but a pack on my back and a compass.")

UserSkill.create(user_id: 6, skill_id: Skill.ids[24], description: "Love woodwork, and enjoy teaching other about it!", credentials: "All my kids can crave!")

UserSkill.create(user_id: 6, skill_id: Skill.ids[27], description: "Been playing and shredding since I was out of the craddle.", credentials:"Eric Clapton said I was pretty darn good!")

UserSkill.create(user_id: 6, skill_id: Skill.ids[41], description: "It is easier than it looks, let me show you!", credentials: "I can make an esspresso in less than two minutes!")



# 3.times do
#     UserSkill.create(user_id: 7, skill_id: Skill.ids.sample, description: descriptionList.sample, credentials: credentialsList.sample)
# end

# 3.times do
#     UserSkill.create(user_id: 8, skill_id: Skill.ids.sample, description: descriptionList.sample, credentials: credentialsList.sample)
# end

# 3.times do
#     UserSkill.create(user_id: 9, skill_id: Skill.ids.sample, description: descriptionList.sample, credentials: credentialsList.sample)
# end
    
# 3.times do
#     UserSkill.create(user_id: 10, skill_id: Skill.ids.sample, description: descriptionList.sample, credentials: credentialsList.sample)
# end

# 3.times do
#     UserSkill.create(user_id: 11, skill_id: Skill.ids.sample, description: descriptionList.sample, credentials: credentialsList.sample)
# end

# 3.times do
#     UserSkill.create(user_id: 12, skill_id: Skill.ids.sample, description: descriptionList.sample, credentials: credentialsList.sample)
# end

# 3.times do
#     UserSkill.create(user_id: 13, skill_id: Skill.ids.sample, description: descriptionList.sample, credentials: credentialsList.sample)
# end

# 3.times do
#     UserSkill.create(user_id: 14, skill_id: Skill.ids.sample, description: descriptionList.sample, credentials: credentialsList.sample)
# end

# 3.times do
#     UserSkill.create(user_id: 15, skill_id: Skill.ids.sample, description: descriptionList.sample, credentials: credentialsList.sample)
# end

# 3.times do
#     UserSkill.create(user_id: 16, skill_id: Skill.ids.sample, description: descriptionList.sample, credentials: credentialsList.sample)
# end

# 3.times do
#     UserSkill.create(user_id: 17, skill_id: Skill.ids.sample, description: descriptionList.sample, credentials: credentialsList.sample)
# end

# 3.times do
#     UserSkill.create(user_id: 18, skill_id: Skill.ids.sample, description: descriptionList.sample, credentials: credentialsList.sample)
# end

# 3.times do
#     UserSkill.create(user_id: 19, skill_id: Skill.ids.sample, description: descriptionList.sample, credentials: credentialsList.sample)
# end

# 3.times do
#     UserSkill.create(user_id: 20, skill_id: Skill.ids.sample, description: descriptionList.sample, credentials: credentialsList.sample)
# end

# 3.times do
#     UserSkill.create(user_id: 21, skill_id: Skill.ids.sample, description: descriptionList.sample, credentials: credentialsList.sample)
# end

# 3.times do
#     UserSkill.create(user_id: 22, skill_id: Skill.ids.sample, description: descriptionList.sample, credentials: credentialsList.sample)
# end

# 3.times do
#     UserSkill.create(user_id: 23, skill_id: Skill.ids.sample, description: descriptionList.sample, credentials: credentialsList.sample)
# end

# 3.times do
#     UserSkill.create(user_id: 24, skill_id: Skill.ids.sample, description: descriptionList.sample, credentials: credentialsList.sample)
# end

# 3.times do
#     UserSkill.create(user_id: 25, skill_id: Skill.ids.sample, description: descriptionList.sample, credentials: credentialsList.sample)
# end

# 3.times do
#     UserSkill.create(user_id: 26, skill_id: Skill.ids.sample, description: descriptionList.sample, credentials: credentialsList.sample)
# end

# 3.times do
#     UserSkill.create(user_id: 27, skill_id: Skill.ids.sample, description: descriptionList.sample, credentials: credentialsList.sample)
# end

# 3.times do
#     UserSkill.create(user_id: 28, skill_id: Skill.ids.sample, description: descriptionList.sample, credentials: credentialsList.sample)
# end

# 3.times do
#     UserSkill.create(user_id: 29, skill_id: Skill.ids.sample, description: descriptionList.sample, credentials: credentialsList.sample)
# end




# 3.times do
#     UserLevelUpSkill.create(user_id: 1, level_up_skill_id: LevelUpSkill.ids.sample)
# end

# 3.times do
#     UserLevelUpSkill.create(user_id: 2, level_up_skill_id: LevelUpSkill.ids.sample)
# end

# 3.times do
#     UserLevelUpSkill.create(user_id: 3, level_up_skill_id: LevelUpSkill.ids.sample)
# end
    
# 3.times do
#     UserLevelUpSkill.create(user_id: 4, level_up_skill_id: LevelUpSkill.ids.sample)
# end

# 3.times do
#     UserLevelUpSkill.create(user_id: 5, level_up_skill_id: LevelUpSkill.ids.sample)
# end

# 3.times do
#     UserLevelUpSkill.create(user_id: 6, level_up_skill_id: LevelUpSkill.ids.sample)
# end

# 3.times do
#     UserLevelUpSkill.create(user_id: 7, level_up_skill_id: LevelUpSkill.ids.sample)
# end

# 3.times do
#     UserLevelUpSkill.create(user_id: 10, level_up_skill_id: LevelUpSkill.ids.sample)
# end

# 3.times do
#     UserLevelUpSkill.create(user_id: 11, level_up_skill_id: LevelUpSkill.ids.sample)
# end

# 3.times do
#     UserLevelUpSkill.create(user_id: 12, level_up_skill_id: LevelUpSkill.ids.sample)
# end

# 3.times do
#     UserLevelUpSkill.create(user_id: 13, level_up_skill_id: LevelUpSkill.ids.sample)
# end


# 3.times do
#     UserLevelUpSkill.create(user_id: 14, level_up_skill_id: LevelUpSkill.ids.sample)
# end

# 3.times do
#     UserLevelUpSkill.create(user_id: 15, level_up_skill_id: LevelUpSkill.ids.sample)
# end

# 3.times do
#     UserLevelUpSkill.create(user_id: 16, level_up_skill_id: LevelUpSkill.ids.sample)
# end

# 3.times do
#     UserLevelUpSkill.create(user_id: 17, level_up_skill_id: LevelUpSkill.ids.sample)
# end

# 3.times do
#     UserLevelUpSkill.create(user_id: 18, level_up_skill_id: LevelUpSkill.ids.sample)
# end

# 3.times do
#     UserLevelUpSkill.create(user_id: 19, level_up_skill_id: LevelUpSkill.ids.sample)
# end

# 3.times do
#     UserLevelUpSkill.create(user_id: 20, level_up_skill_id: LevelUpSkill.ids.sample)
# end

# 3.times do
#     UserLevelUpSkill.create(user_id: 21, level_up_skill_id: LevelUpSkill.ids.sample)
# end

# 3.times do
#     UserLevelUpSkill.create(user_id: 22, level_up_skill_id: LevelUpSkill.ids.sample)
# end

# 3.times do
#     UserLevelUpSkill.create(user_id: 23, level_up_skill_id: LevelUpSkill.ids.sample)
# end

# 3.times do
#     UserLevelUpSkill.create(user_id: 24, level_up_skill_id: LevelUpSkill.ids.sample)
# end

# 3.times do
#     UserLevelUpSkill.create(user_id: 25, level_up_skill_id: LevelUpSkill.ids.sample)
# end

# 3.times do
#     UserLevelUpSkill.create(user_id: 26, level_up_skill_id: LevelUpSkill.ids.sample)
# end

# 3.times do
#     UserLevelUpSkill.create(user_id: 27, level_up_skill_id: LevelUpSkill.ids.sample)
# end

# 3.times do
#     UserLevelUpSkill.create(user_id: 28, level_up_skill_id: LevelUpSkill.ids.sample)
# end

# 3.times do
#     UserLevelUpSkill.create(user_id: 29, level_up_skill_id: LevelUpSkill.ids.sample)
# end










puts "Seeding, complete!"