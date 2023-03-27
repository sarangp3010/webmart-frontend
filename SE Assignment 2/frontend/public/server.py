# Import necessary libraries
from flask import Flask, render_template, request, redirect, url_for
import sqlite3

# Create a Flask app
app = Flask(__name__)

# Create a connection to the database
conn = sqlite3.connect('inventory.db')

# Create a table to store inventory items if it doesn't already exist
conn.execute('''CREATE TABLE IF NOT EXISTS inventory
                (id INTEGER PRIMARY KEY AUTOINCREMENT,
                 name TEXT NOT NULL,
                 quantity INTEGER NOT NULL)''')

# Define a function to add an inventory item to the database
def add_inventory(name, quantity):
    conn.execute("INSERT INTO inventory (name, quantity) VALUES (?, ?)", (name, quantity))
    conn.commit()

# Define a function to retrieve all inventory items from the database
def get_inventory():
    cursor = conn.execute("SELECT * FROM inventory")
    return cursor.fetchall()

# Define a route to the home page that displays the inventory table and buttons for adding and updating inventory
@app.route('/')
def home():
    inventory = get_inventory()
    return render_template('home.html', inventory=inventory)

# Define a route to handle adding an inventory item
@app.route('/add_inventory', methods=['POST'])
def handle_add_inventory():
    name = request.form['name']
    quantity = request.form['quantity']
    add_inventory(name, quantity)
    return redirect(url_for('home'))

if __name__ == '__main__':
    app.run()
