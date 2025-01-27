"""added coa_iso to countries

Revision ID: ca0d68d4e154
Revises: 86b1beed08fe
Create Date: 2024-10-22 12:28:31.006944

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'ca0d68d4e154'
down_revision = '86b1beed08fe'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('countries', schema=None) as batch_op:
        batch_op.add_column(sa.Column('coa_iso', sa.String(length=255), nullable=False))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('countries', schema=None) as batch_op:
        batch_op.drop_column('coa_iso')

    # ### end Alembic commands ###
