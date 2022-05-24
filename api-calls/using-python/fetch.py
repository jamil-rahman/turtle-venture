import requests

access_token = 'd7c01847de4c083cb154e9a533294301e9f05f93dbae7d589e42ece63226c0a3'
url = 'https://gorest.co.in/public/v1/users'


def getData():
    result = requests.get(url,
                          headers={'Content-Type': 'application/json',
                                   'Authorization': 'Bearer {}'.format(access_token)}).text
    print(result)


getData()
