import pandas as pd

# read excel
df = pd.read_excel("villages.xlsx")

# select needed columns
df = df[['STATE NAME', 'DISTRICT NAME', 'SUB-DISTRICT NAME', 'Area Name']]
df.columns = ['state', 'district', 'subdistrict', 'village']

# clean data
df = df.apply(lambda x: x.str.strip().str.lower())
df = df.drop_duplicates()

# remove fake hierarchy rows
df = df[df['district'] != df['state']]
df = df[df['subdistrict'] != df['district']]
df = df[df['village'] != df['subdistrict']]

# create separate tables
states = df[['state']].drop_duplicates()
districts = df[['district', 'state']].drop_duplicates()
subdistricts = df[['subdistrict', 'district']].drop_duplicates()
villages = df[['village', 'subdistrict']].drop_duplicates()

# save to csv
states.to_csv("states.csv", index=False)
districts.to_csv("districts.csv", index=False)
subdistricts.to_csv("subdistricts.csv", index=False)
villages.to_csv("villages.csv", index=False)

print("All files created successfully")