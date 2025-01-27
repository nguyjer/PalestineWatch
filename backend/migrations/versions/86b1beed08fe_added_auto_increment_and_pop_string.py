"""added auto increment and pop -> string

Revision ID: 86b1beed08fe
Revises: 35e1b7890524
Create Date: 2024-10-22 11:37:15.775518

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '86b1beed08fe'
down_revision = '35e1b7890524'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('countries', schema=None) as batch_op:
        batch_op.alter_column('population',
               existing_type=sa.INTEGER(),
               type_=sa.String(length=255),
               existing_nullable=False)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('countries', schema=None) as batch_op:
        batch_op.alter_column('population',
               existing_type=sa.String(length=255),
               type_=sa.INTEGER(),
               existing_nullable=False)

    # ### end Alembic commands ###
