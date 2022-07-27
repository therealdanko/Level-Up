User.destroy_all
User.reset_pk_sequence
UserSkill.destroy_all
UserSkill.reset_pk_sequence
Skill.destroy_all
Skill.reset_pk_sequence


puts "Starting Seeding..."

 skills = ["Knitting", "Painting", "Flyfishing", "Surfing", "Singing", "Chess", "Bike Repair", "German", "Archery", "Skiing", "Snowboarding", "Electrical Repairs", "Plumbing", "Public Speaking", "Driving Manual", "Basketball", "Tennis", "Computer Repair", "Software troubleshooting", "Salsa", "Forro", "Tap dancing", "DND narrating", "Rock Climbing", "Wood Carving", "Drawing", "Piano", "Guitar", "Violin"]

 skills.each do |skill|
    Skill.create(name: skill)
end

danko = User.create(
    username: "Danko", 
    password:"Danko1234!", 
    password_confirmation:"Danko1234!", 
    name: "Danko Karleusa",
    email_address: "danko@test.com",
    is_admin: true, 
    profile_image:"https://cdn-images-1.medium.com/max/1000/1*_Y92uzTrvKjaGwDrbxTobg.jpeg",
    )

test1 = User.create(
    username: "Test1", 
    password:"Test1234!", 
    password_confirmation:"Test1234!", 
    name: "Test One",
    email_address: "test1@test.com")

test2 = User.create(
    username: "Test2", 
    password:"Test1234!", 
    password_confirmation:"Test1234!", 
    name: "Test Two",
    email_address: "test2@test.com")

test3 = User.create(
    username: "Test3", 
    password:"Test1234!", 
    password_confirmation:"Test1234!", 
    name: "Test Three",
    email_address: "test3@test.com")

test4 = User.create(
    username: "Test4", 
    password:"Test1234!", 
    password_confirmation:"Test1234!", 
    name: "Test Four",
    email_address: "test4@test.com")

test5 = User.create(
    username: "Test5", 
    password:"Test1234!", 
    password_confirmation:"Test1234!", 
    name: "Test Five",
    email_address: "test5@test.com")

test6 = User.create(
    username: "Test6", 
    password:"Test1234!", 
    password_confirmation:"Test1234!", 
    name: "Test Six",
    email_address: "test6@test.com")

3.times do
    UserSkill.create(user_id: 1, skill_id: Skill.ids.sample)
end

3.times do
    UserSkill.create(user_id: 2, skill_id: Skill.ids.sample)
end

3.times do
    UserSkill.create(user_id: 3, skill_id: Skill.ids.sample)
end
    
3.times do
    UserSkill.create(user_id: 4, skill_id: Skill.ids.sample)
end

3.times do
    UserSkill.create(user_id: 5, skill_id: Skill.ids.sample)
end

3.times do
    UserSkill.create(user_id: 6, skill_id: Skill.ids.sample)
end

3.times do
    UserSkill.create(user_id: 7, skill_id: Skill.ids.sample)
end

3.times do
    SkillsToLevelUp.create(user_id: 1, skill_id: Skill.ids.sample)
end

3.times do
    SkillsToLevelUp.create(user_id: 2, skill_id: Skill.ids.sample)
end


3.times do
    SkillsToLevelUp.create(user_id: 3, skill_id: Skill.ids.sample)
end


3.times do
    SkillsToLevelUp.create(user_id: 4, skill_id: Skill.ids.sample)
end

3.times do
    SkillsToLevelUp.create(user_id: 5, skill_id: Skill.ids.sample)
end

3.times do
    SkillsToLevelUp.create(user_id: 6, skill_id: Skill.ids.sample)
end

3.times do
    SkillsToLevelUp.create(user_id: 7, skill_id: Skill.ids.sample)
end





puts "Seeding, complete!"